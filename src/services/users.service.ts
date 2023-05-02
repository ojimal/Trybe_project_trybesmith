import UserModel from '../models/users.model';
import { User } from '../interfaces';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  createUser = async (user: User) => {
    try {
      return await this.model.createUser(user);
    } catch (error) {
      console.error('Service failed to create User:', error);
      throw error;
    }
  };

  login = async (username: string, password: string) => {
    try {
      return await this.model.login(username, password);
    } catch (error) {
      console.error('Service failed to Login:', error);
      throw error;
    }
  };
}