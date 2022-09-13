import ProductModel from '../models/products';
import IProduct from '../interfaces/products.interface';

const registerProduct = async (data: IProduct): Promise<IProduct> => {
  const products = await ProductModel.registerProduct(data);
  const newObj = {
    id: products.insertId,
    name: data.name,
    amount: data.amount,
  };
  return newObj;
};

export default { registerProduct };