import { Router } from 'express';
import orderController from '../controllers/orderController';

const ordersRoute = Router();

ordersRoute.get('/orders', orderController.getAll);

export default ordersRoute;