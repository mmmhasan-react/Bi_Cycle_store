import { Request, Response } from 'express';
import { bicycleServices } from './bicycle.service';

//createByCycle
const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycle = req.body.bicycles;

    const result = await bicycleServices.createBicycleIntoDb(bicycle);

    res.status(200).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get all bicycle data
const getAllByCycle = async (req: Request, res: Response) => {
  try {
    const result = await bicycleServices.getAllBicyclesFromDb();
    res.status(200).json({
      message: 'Bicycle get successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get single cicyle
const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bicycleServices.getSingleBicyclesFromDb(productId);

    res.status(200).json({
      message: 'get  single Bicycle successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const bicycleContoller = {
  createBicycle,
  getAllByCycle,
  getSingleBicycle,
};
