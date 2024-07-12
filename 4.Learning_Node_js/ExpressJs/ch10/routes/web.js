import express from 'express';
const router = express.Router()

import { homeController,aboutController } from '../controllers/HomeController.js';

router.get('/home',homeController)
router.get('/about',aboutController)

export default router