import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { generateToken } from '../utils/jwt';

export default class UsersController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this.service.createUser(req.body);
      const token = generateToken(user);
    
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Users Controller failed' });
    }
  };
}
