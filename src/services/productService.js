import {
  getAllProductsRepository,
  getProductByIdRepository,
  updateProductRepository,
  deleteProductRepository,
  addProductRepository
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
  return await updateProductRepository(productId, newData)
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
export const addProductService = async (productData) => {
  try {
    const newProduct = await addProductRepository(productData);
    return newProduct;
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
};