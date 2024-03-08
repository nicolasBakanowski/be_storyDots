import Product from '../models/product.js'

export const getAllProductsRepository = async () => {
  return Product.findAll()
}

export const getProductByIdRepository = async (productId) => {
  return Product.findByPk(productId)
}