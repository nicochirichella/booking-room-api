const config = {
    apiKey: "AIzaSyA-a7c4AM2ICJrHde1kJRBEzQ7CcLWNOJA",
    authDomain: "booking-room-15636.firebaseapp.com",
    projectId: "booking-room-15636",
    storageBucket: "booking-room-15636.appspot.com",
    messagingSenderId: "127588561195",
    appId: "1:127588561195:web:a9aa21900de44eac6dd56e"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }