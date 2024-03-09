import express from 'express'
import {
  getAllProductsController,
  getProductByIdController,
  editProductController,
} from '../controllers/productController.js'
import { editProductValidationRules } from '../validators/editProductValidator.js'

const productRoute = express.Router()
productRoute.get('/all', getAllProductsController)
productRoute.get('/:id', getProductByIdController)
productRoute.put('/edit/:id', editProductValidationRules, editProductController)

export default productRoute
