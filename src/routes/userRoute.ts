import { Router } from 'express';
import usersController from '../controllers/usersController';

const productsRoute = Router();

productsRoute.post('/users', usersController.registeruser);

export default productsRoute;