import express from 'express'
import {
  getAllProductsController,
  getProductByIdController,
  editProductController,
  deleteProductController,
} from '../controllers/productController.js'
import { editProductValidationMiddleware } from '../validators/editProductValidator.js'

const productRoute = express.Router()
productRoute.get('/all', getAllProductsController)
productRoute.get('/:id', getProductByIdController)
productRoute.put('/edit/:id', editProductValidationMiddleware, editProductController)
productRoute.delete('/delete/:id',deleteProductController )
export default productRoute
