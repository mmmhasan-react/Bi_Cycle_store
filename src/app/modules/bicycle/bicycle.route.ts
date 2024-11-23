import express from 'express';
import { bicycleContoller } from './bicycle.controller';

const router = express.Router();

router.post('/create-student', bicycleContoller.createBicycle);
router.get('/', bicycleContoller.getAllByCycle);

export const bicycleRoutes = router;
