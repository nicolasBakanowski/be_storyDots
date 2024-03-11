import { validationResult, body } from 'express-validator';

export const productValidationMiddleware = [
  body('name').notEmpty().withMessage('El nombre no puede estar vacío'),
  body('description').optional(),
  body('price')
    .notEmpty()
    .withMessage('El precio no puede estar vacío')
    .isDecimal()
    .withMessage('El precio debe ser un número decimal'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];


export const editProductValidationMiddleware = [
    body('name').notEmpty().withMessage('El nombre no puede estar vacío'),
    body('description').optional(),
    body('price')
      .notEmpty()
      .withMessage('El precio no puede estar vacío')
      .isDecimal()
      .withMessage('El precio debe ser un número decimal'),
  
    (req, res, next) => {
      const errors = validationResult(req)
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
  
      next()
    },
  ]
  