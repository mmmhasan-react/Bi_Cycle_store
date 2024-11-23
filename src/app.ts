import express, { Request, Response } from 'express';
import cors from 'cors';
import { bicycleRoutes } from './app/modules/bicycle/bicycle.route';
const app = express();

//parsers

app.use(express.json());
app.use(cors());

//all application routes
app.use('/api/products', bicycleRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
