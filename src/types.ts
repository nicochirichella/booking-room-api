export interface User {
    email: string;
    uid: string;
    displayName: string;
    photoURL: string;
}
export interface BookingInterface {
    id?: string;
    roomId: number;
    hotelId: number;
    startDate: number;
    endDate: number;
    name: string;
    email: string;
    phone: string;
    description: string;
    guests: number;
    currency: string;
    price: number;
    paymentMethod: string;
}