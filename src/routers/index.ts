import express from 'express';

import productRouter from './product.router';

const router = express.Router();

router.use('/products', productRouter);

export default router;