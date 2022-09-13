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

const getAll = async (): Promise<IProduct[]> => {
  const products = await ProductModel.getAll();
  return products;
};

export default { registerProduct, getAll };