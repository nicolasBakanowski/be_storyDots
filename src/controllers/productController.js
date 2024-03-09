import {
  editProductService,
  getAllProductsService,
  getProductByIdService,
} from '../services/productService.js'

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService()
    return res.status(200).json(products)
  } catch (error) {
    console.error('Error in getAllProducts:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getProductByIdController = async (req, res) => {
  const productId = req.params.id
  try {
    const product = await getProductByIdService(productId)
    return res.status(200).json(product)
  } catch (error) {
    if (error.message === 'Product not found') {
      return res.status(404).json({ error: 'Product not found' })
    } else {
      console.error('Error in getProductById:', error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}

export const editProductController = async (req, res) => {
  try {
    const productId = req.params.id

    await editProductService(productId, {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    })
    res.status(200).json({ message: 'OK' })
  } catch (error) {
    console.error('Error in editProduct:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
