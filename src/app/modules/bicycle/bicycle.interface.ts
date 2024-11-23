import { Schema, model, connect } from 'mongoose';

//bicycle type definition.
export type Bicycle = {
  name: string;
  brand: string;
  price: number;
  type: string;
  description: string;
  quantity: number;
  inStock: boolean;
};
