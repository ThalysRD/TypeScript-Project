import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/users.interface';

const registeruser = async (user: IUser): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(`INSERT INTO 
  Trybesmith.Users (username, classe, level, password) 
  VALUES (?,?,?,?)`, [username, classe, level, password]);
  return result;
};

export default { registeruser };