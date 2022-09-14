import connection from './connection';

const getAll = async () => {
  const [result] = await connection.execute(`SELECT
  O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
FROM
  Trybesmith.Orders AS O
      INNER JOIN
  Trybesmith.Products AS P ON O.id = P.orderId
GROUP BY O.id
ORDER BY O.userId
`);
  return result;
};

export default { getAll };