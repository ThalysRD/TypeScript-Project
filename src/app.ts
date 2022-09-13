import express from 'express';
import productsRoute from './routes/productRoute';
import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/', productsRoute);
app.use('/', userRoute);

export default app;
