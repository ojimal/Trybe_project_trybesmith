import express from 'express';

import productRouter from './product.router';
import usersRouter from './users.router';
import ordersRouter from './orders.router';
import loginRouter from './login.router';

const router = express.Router();

router.use('/products', productRouter);
router.use('/users', usersRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;