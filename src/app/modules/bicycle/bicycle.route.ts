import express from 'express';
import { bicycleContoller } from './bicycle.controller';

const router = express.Router();

router.post('/create-student', bicycleContoller.createStudent);

export const bicycleRoutes = router;
