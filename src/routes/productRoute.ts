import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRoute = Router();

productsRoute.post('/products', productsController.registerProduct);
productsRoute.get('/products', productsController.getAll);

export default productsRoute;