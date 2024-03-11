import {
  getAllProductsRepository,
  getProductByIdRepository,
  updateProductRepository,
  deleteProductRepository
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
export const deleteProductService = async (productId) => {
  const product = await getProductByIdRepository(productId);
  if (!product) {
    throw new Error('Product not found');
  }
  try {
    await deleteProductRepository(productId);
    return { success: true, message: 'Product deleted' };
  } catch (error) {
    throw new Error(`Error deleting product:`);
  }
};