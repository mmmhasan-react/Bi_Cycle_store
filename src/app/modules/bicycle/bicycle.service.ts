import { Bicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.model';
import { ObjectId } from 'mongodb';

const createBicycleIntoDb = async (bicycle: Bicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicyclesFromDb = async () => {
  const result = await BicycleModel.find();
  return result;
};

const getSingleBicyclesFromDb = async (id: string) => {
  const result = await BicycleModel.findOne({ _id: new ObjectId(id) });
  return result;
};

export const bicycleServices = {
  createBicycleIntoDb,
  getAllBicyclesFromDb,
  getSingleBicyclesFromDb,
};
