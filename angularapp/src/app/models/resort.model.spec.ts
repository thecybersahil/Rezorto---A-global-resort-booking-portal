import { Resort } from './resort.model';

describe('Resort Model', () => {

  fit('frontend_resort model should create an instance', () => {
    // Create a sample user object
    const resort: Resort = {
      resortName: 'Sample',
      resortLocation: 'Chennai',
      resortAvailableStatus: 'Available',
      price: 100,
      capacity: 10,
      description: 'Sample Resort'
    };

    expect(resort).toBeTruthy();
    expect(resort.price).toBe(100);
    expect(resort.capacity).toBe(10);

  });
});
