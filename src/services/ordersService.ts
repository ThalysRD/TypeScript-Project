import ordersModel from '../models/orders';
import IOrders from '../interfaces/orders.interface';

const getAll = async () : Promise<IOrders[]> => {
  const result = await ordersModel.getAll();
  return result;
};

export default { getAll };