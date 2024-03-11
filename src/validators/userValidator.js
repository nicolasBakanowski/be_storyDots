import { validationResult, body } from 'express-validator'

export const createUserValidation = [
  body('username')
    .notEmpty()
    .withMessage('El nombre de usuario no puede estar vacío')
    .isAlphanumeric()
    .withMessage('El nombre de usuario solo puede contener letras y números')
    .trim(),

  body('password')
    .notEmpty()
    .withMessage('La contraseña no puede estar vacía')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    next()
  },
]
