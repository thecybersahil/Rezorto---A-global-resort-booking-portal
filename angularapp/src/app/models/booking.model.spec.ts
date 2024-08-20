import { Booking } from './booking.model';

describe('Booking Model', () => {

  fit('frontend_booking model should create an instance', () => {
    // Create a sample user object
    const booking: Booking = {
      noOfPersons: 10,
      status: 'Available',
      totalPrice: 10000,
      address: 'Chennai'
    };

    expect(booking).toBeTruthy();
    expect(booking.totalPrice).toBe(10000);
    expect(booking.status).toBe('Available');

  });
});
