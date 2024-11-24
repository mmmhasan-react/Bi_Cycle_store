import express from 'express';
import { bicycleContoller } from './bicycle.controller';

const router = express.Router();

router.post('/create-bicycle', bicycleContoller.createBicycle);
router.get('/', bicycleContoller.getAllByCycle);
router.get('/:productId', bicycleContoller.getSingleBicycle);

export const bicycleRoutes = router;
