import Product from '../models/product.js'

export const getAllProductsRepository = async () => {
  return Product.findAll()
}

export const getProductByIdRepository = async (productId) => {
  return Product.findByPk(productId)
}

export const updateProductRepository = async (productId, newData) => {
  if (productId) {
    return Product.update(newData, { where: { id: productId } });
  } else {
    throw new Error("Product not found");
  }
};

export const deleteProductRepository = async (productId) => {
  const deletedRowCount = await Product.destroy({ where: { id: productId } });
  if (deletedRowCount === 0) {
    throw new Error("Product not found");
  }
  return true;
};
