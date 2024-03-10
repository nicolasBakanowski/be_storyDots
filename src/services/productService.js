import {
  getAllProductsRepository,
  getProductByIdRepository,
  updateProductRepository
} from '../repositories/productRepository.js'

export const getAllProductsService = async () => {
  return getAllProductsRepository()
}

export const getProductByIdService = async (productId) => {
  const product = await getProductByIdRepository(productId)
  if (!product) {
    throw new Error('Product not found')
  }
  return product
}

export const editProductService = async (productId, newData) => {
  const product = await getProductByIdRepository(productId)
  if (!product) {
    throw new Error('Product not found')
  }
  await updateProductRepository(productId, newData)
}
