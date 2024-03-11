import {
  getAllProductsRepository,
  getProductByIdRepository,
  updateProductRepository,
  deleteProductRepository,
} from '../repositories/productRepository.js'

export const getAllProductsService = async () => {
  return getAllProductsRepository()
}

export const getProductByIdService = async (productId) => {
  const product = await getProductByIdRepository(productId)
  if (!product) {
    return false
  }
  return product
}

export const editProductService = async (productId, newData) => {
  const product = await getProductByIdRepository(productId)
  if (!product) {
    return false
  }
  await updateProductRepository(productId, newData)
}
export const deleteProductService = async (productId) => {
  const product = await getProductByIdRepository(productId)
  if (!product) {
    return false
  }
  try {
    await deleteProductRepository(productId)
    return true
  } catch (error) {
    throw new Error(`Error deleting product:`)
  }
}
