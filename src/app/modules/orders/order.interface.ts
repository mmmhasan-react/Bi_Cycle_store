import { Schema, model, connect } from 'mongoose';

export type Order = {
  email: string;
  product: object;
  quantity: number;
  totalPrice: number;
};
