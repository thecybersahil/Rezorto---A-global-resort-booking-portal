import { User } from './user.model';

describe('User Model', () => {

  fit('frontend_user model should create an instance', () => {
    // Create a sample user object
    const user: User = {
      username: 'Admin',
      email:'admin@gmail.com',
      password:'Admin@123',
      userRole:'ADMIN'
    };

    expect(user).toBeTruthy();
    expect(user.username).toBe('Admin');
    expect(user.email).toBe('admin@gmail.com');
    expect(user.password).toBe('Admin@123');
    expect(user.userRole).toBe('ADMIN');


  });
});
