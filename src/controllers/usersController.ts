import { Request, Response } from 'express';
import userService from '../services/userService';

const registeruser = async (req: Request, res: Response): Promise<Response> => {
  const data = req.body;
  const result = await userService.registeruser(data);
  return res.status(201).json({ token: result });
};

export default { registeruser };