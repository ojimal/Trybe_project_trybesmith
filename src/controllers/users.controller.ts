import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { generateToken } from '../utils/jwt';

export default class UsersController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this.service.createUser(req.body);
      const token = generateToken(user);
    
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Users Controller failed to create user' });
    }
  };

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
      const user = await this.service.login(username, password);
      if (!user.id || user.password !== req.body.password) {
        return res.status(401).json({ message: 'Username or password invalid' });
      }
      const token = generateToken(user);
      res.status(200).json({ token });
    } catch (erro) {
      res.status(500).json({ error: 'Users Controller failed to login' });
    }
  };
}
