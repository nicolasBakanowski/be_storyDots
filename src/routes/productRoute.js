import express from 'express'
import {
  getAllProductsController,
  getProductByIdController,
  editProductController,
  deleteProductController,
  addProductController
} from '../controllers/productController.js'

import { validationTokenMiddleware } from '../middlewares/validateTokenMiddleware.js'
import { adminPermissionMiddleware } from '../middlewares/adminPermissionMiddleware.js'


const productRoute = express.Router()
productRoute.get('/all', getAllProductsController)
productRoute.get('/:id', getProductByIdController)
productRoute.put(
  '/edit/:id',
  validationTokenMiddleware,
  adminPermissionMiddleware,
  editProductController,
)
productRoute.delete('/delete/:id',
  validationTokenMiddleware,
  adminPermissionMiddleware,
  deleteProductController
)
productRoute.post(
  '/new',
  validationTokenMiddleware,
  adminPermissionMiddleware,
  addProductController,
);
export default productRoute
