import { Router } from 'express'
import { createUserController } from '../controllers/userController.js'
import { createUserValidation } from '../validators/userValidator.js'
const userRoute = Router()

userRoute.route('/new').post(createUserValidation, createUserController)

export default userRoute
