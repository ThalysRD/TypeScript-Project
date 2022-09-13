import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

const registerProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(`INSERT INTO 
      Trybesmith.Products (name, amount) VALUES (?, ?);`, [name, amount]);
  return result;
};

export default { registerProduct };