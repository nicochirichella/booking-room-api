import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { getFirebaseConfig } from './firebase/config';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const container = document.getElementById('root')!;
const root = createRoot(container);

function authStateObserver(user: any) {
  if (user) {
    console.log('User is signed in');
  } else {
    console.log('User is signed out');
  }
}

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig)
// TODO 0: Initialize Firebase

// TODO 12: Initialize Firebase Performance Monitoring

initFirebaseAuth();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
