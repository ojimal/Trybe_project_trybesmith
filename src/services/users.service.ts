import UserModel from '../models/users.model';
import { User } from '../interfaces';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  createUser = async (user: User): Promise<User> => {
    try {
      return await this.model.createUser(user);
    } catch (error) {
      console.error('Service failed to create User:', error);
      throw error;
    }
  };
}

export default UserService;