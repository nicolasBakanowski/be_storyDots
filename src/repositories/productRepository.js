import Product from '../models/product.js'
import Brand from '../models/brand.js';

export const getAllProductsRepository = async () => {
  return Product.findAll({
    include: [{ model: Brand, as: 'brand' }],
  });
}

export const getProductByIdRepository = async (productId) => {
  return Product.findByPk(productId, {
    include: [{ model: Brand, as: 'brand' }],
  });
}


export const updateProductRepository = async (productId, newData) => {
  if (productId) {
    Product.update(newData, { where: { id: productId } })
    return true;
  } else {
    throw new Error('Product not found')
  }
}
export const deleteProductRepository = async (productId) => {
  const deletedRowCount = await Product.destroy({ where: { id: productId } })
  if (deletedRowCount === 0) {
    throw new Error('Product not found')
  }
  return true
}
export const addProductRepository = async (productData) => {
  try {
    const newProduct = await Product.create(productData);
    return newProduct;
  } catch (error) {
    throw new Error('Error adding product: ' + error.message);
  }
};
