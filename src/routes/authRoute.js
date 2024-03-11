import { Router } from 'express';
import { loginController } from '../controllers/authController.js';

const authRoute = Router();


authRoute.route('/login')
    .post(loginController);


export default authRoute;