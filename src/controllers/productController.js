import {
  editProductService,
  getAllProductsService,
  getProductByIdService,
  deleteProductService,
} from '../services/productService.js'
import { StatusCodes } from 'http-status-codes'

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService()
    return res.status(StatusCodes.OK).json(products)
  } catch (error) {
    console.error('Error in getAllProducts:', error)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' })
  }
}

export const getProductByIdController = async (req, res) => {
  const productId = req.params.id
  try {
    const product = await getProductByIdService(productId)
    const responseStatus = !product ? StatusCodes.NOT_FOUND : StatusCodes.OK
    return res
      .status(responseStatus)
      .json(!product ? { error: 'Product not found' } : product)
  } catch (error) {
    console.error('error in getProduct by id ', error)
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' })
  }
}
export const editProductController = async (req, res) => {
  const productId = req.params.id
  try {
    const isEdited = await editProductService(productId, req.body)
    const responseStatus = isEdited
      ? StatusCodes.OK
      : StatusCodes.INTERNAL_SERVER_ERROR
    const responseData = isEdited
      ? { message: 'Product edited successfully' }
      : { error: 'Internal Server Error' }
    res.status(responseStatus).json(responseData)
  } catch (error) {
    console.error('Error in editProduct:', error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' })
  }
}

export const deleteProductController = async (req, res) => {
  const productId = req.params.id
  try {
    const isDeleted = await deleteProductService(productId)
    const responseStatus = isDeleted ? StatusCodes.OK : StatusCodes.NOT_FOUND
    const responseData = isDeleted
      ? { message: 'Product deleted successfully' }
      : { error: 'Product not found' }
    res.status(responseStatus).json(responseData)
  } catch (error) {
    console.error('Error in deleteProduct:', error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal Server Error' })
  }
}
