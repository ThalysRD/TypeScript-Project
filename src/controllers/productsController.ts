import { Request, Response } from 'express';
import productsService from '../services/productsService';

const registerProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await productsService.registerProduct(data);
  return res.status(201).json(result);
}; 

const getAll = async (_req: Request, res: Response) => {
  const result = await productsService.getAll();
  return res.status(200).json(result);
};

export default { registerProduct, getAll };