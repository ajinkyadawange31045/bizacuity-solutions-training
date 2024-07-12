import express from 'express';
const router = express.Router()
import { homeController } from '../controllers/homeController.js';

router.get('/home',homeController);

export default router;