// repository in firebase collection "bookings"
// expose methods to create, read, update and delete bookings

// import * as admin from 'firebase-admin';
import { BookingInterface } from '../types';

import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    getDocs,
    getDoc,
    deleteDoc,
    updateDoc,
    doc,
  } from 'firebase/firestore';

const BOOKING_COLLECTION = 'bookings';

export async function createBooking(booking: BookingInterface): Promise<BookingInterface> {
    try {
        const docRef = await addDoc(collection(getFirestore(), BOOKING_COLLECTION), {
            ...booking,
        });
        return {
            ...booking,
            id: docRef.id,
        };
      }
      catch(error) {
        console.error('Error writing new message to Firebase Database', error);
        throw error;
      }
}

export async function getBookings(): Promise<BookingInterface[]> {
    const q = query(collection(getFirestore(), BOOKING_COLLECTION), orderBy('startDate', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        } as BookingInterface;
    });
}

export async function getBooking(id: string): Promise<BookingInterface> {
    const docRef = doc(getFirestore(), BOOKING_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    return ({
        ...docSnap.data(),
        id: docSnap.id,
    } as BookingInterface);
}

export async function updateBooking(id: string, booking: BookingInterface): Promise<BookingInterface> {
    try {
        const docRef = doc(getFirestore(), BOOKING_COLLECTION, id);
        await updateDoc(docRef, {
            ...booking,
            id
        });
        return {
            ...booking,
        };
      }
      catch(error) {
        console.error('Error writing new message to Firebase Database', error);
        throw error;
      }
}

export async function deleteBooking(id: string): Promise<void> {
    const docRef = doc(getFirestore(), BOOKING_COLLECTION, id);
    await deleteDoc(docRef);
}

