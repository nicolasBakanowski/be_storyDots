import { body } from 'express-validator'
export const editProductValidationRules = [
  body('name').notEmpty().withMessage('El nombre no puede estar vacío'),
  body('description').optional(),
  body('price')
    .notEmpty()
    .withMessage('El precio no puede estar vacío')
    .isDecimal()
    .withMessage('El precio debe ser un número decimal'),
]
