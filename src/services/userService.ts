import users from '../models/users';
import IUser from '../interfaces/users.interface';
import jwtService from './jwtService';

const registeruser = async (data: IUser) => {
  const result = await users.registeruser(data);
  const token = jwtService.generateToken(result.insertId);
  return token;
};

export default { registeruser };