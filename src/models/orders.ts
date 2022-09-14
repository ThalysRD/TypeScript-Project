import connection from './connection';
import IOrders from '../interfaces/orders.interface';

const getAll = async () : Promise<IOrders[]> => {
  const [result] = await connection.execute(`SELECT
  O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
FROM
  Trybesmith.Orders AS O
      INNER JOIN
  Trybesmith.Products AS P ON O.id = P.orderId
GROUP BY O.id
ORDER BY O.userId
`);
  return result as IOrders[];
};

export default { getAll };