import express from 'express'
import {
  getAllProductsController,
  getProductByIdController,
  editProductController,
  deleteProductController,
  addProductController
} from '../controllers/productController.js'
import { addProductValidationMiddleware } from '../validators/addProductValidator.js'
import { editProductValidationMiddleware } from '../validators/editProductValidator.js'
import { validationTokenMiddleware } from '../middlewares/validateTokenMiddleware.js'
import { adminPermissionMiddleware } from '../middlewares/adminPermissionMiddleware.js'


const productRoute = express.Router()
productRoute.get('/all', getAllProductsController)
productRoute.get('/:id', getProductByIdController)
productRoute.put(
  '/edit/:id',
  validationTokenMiddleware,
  adminPermissionMiddleware,
  editProductValidationMiddleware,
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
  addProductValidationMiddleware,
  addProductController,
);
export default productRoute
