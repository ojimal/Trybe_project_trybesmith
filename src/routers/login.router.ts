import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import LoginAuth from '../middlewares/loginAuth';

const router = Router();

const usersController = new UsersController();

router.use(LoginAuth.validate);

router.post('/', usersController.login);

export default router;