import express from 'express'
import {
  getAllProductsController,
  getProductByIdController,
} from '../controllers/productController.js'

const productRoute = express.Router()
productRoute.get('/all', getAllProductsController)
productRoute.get('/:id', getProductByIdController)

export default productRoute
