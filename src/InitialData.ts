import img1 from './images/hotel1.jpeg';
import img2 from './images/hotel1.jpeg';
import img3 from './images/hotel1.jpeg';

import room1 from './images/room1.jpeg';
import room2 from './images/room2.jpeg';

const hotels = [
    {
        id: 1,
        src: img1,
        title: 'Hotel 1',
        description: 'Hotel 1 description',
    },
    {
        id: 2,
        src: img2,
        title: 'Hotel 2',
        description: 'Hotel 2 description',
        rooms: []
    },
    {
        id: 3,
        src: img3,
        title: 'Hotel 3',
        description: 'Hotel 3 description',
        rooms: []
    },
];

export const rooms = [ 
    {
        id: 1,
        title: 'Room 1',
        src: room1,
        description: 'This is a very long description for room 1. Where I need to see how it is going to look like in the UI. I hope it is going to be fine.',
        price: 100,
        hotelId: 1
    },
    {
        id: 2,
        title: 'Room 2',
        src: room2,
        description: 'Room 2 description',
        price: 200,
        hotelId: 1
    }
]


export const bookings = [
    {
        id: 1,
        startDate: '2022-10-1',
        endDate: '2022-10-5',
        description: 'Booking 1 description',
        hotelId: 0,
        roomId: 0,
    },
    {
        id: 2,
        startDate: '2022-10-10',
        endDate: '2022-10-15',
        description: 'Booking 2 description',
        hotelId: 0,
        roomId: 0,
    }
]

export default hotels;