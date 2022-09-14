import ordersModel from '../models/orders';

const getAll = async () => {
  const result = await ordersModel.getAll();
  return result;
};

export default { getAll };