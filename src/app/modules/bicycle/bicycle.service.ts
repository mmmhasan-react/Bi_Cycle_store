import { Bicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.model';

const createBicycleIntoDb = async (bicycle: Bicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicyclesFromDb = async () => {
  const result = await BicycleModel.find();
  return result;
};

export const bicycleServices = {
  createBicycleIntoDb,
  getAllBicyclesFromDb,
};
