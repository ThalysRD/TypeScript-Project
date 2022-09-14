import express from 'express';
import productsRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import ordersRoute from './routes/orderRoute';

const app = express();

app.use(express.json());

app.use('/', productsRoute);
app.use('/', userRoute);
app.use('/', ordersRoute);

export default app;
