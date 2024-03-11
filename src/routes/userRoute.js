import { Router } from 'express'
import { createUserController } from '../controllers/userController.js'
import { createUserValidation } from '../validators/userValidator.js'
import { updateIsAdminRepository } from '../repositories/userRepository.js'
const userRoute = Router()

userRoute.route('/new').post(createUserValidation, createUserController)

userRoute.route('/updateIsAdmin/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        await updateIsAdminRepository(id);
        return res.status(200).json({ message: 'Campo isAdmin actualizado correctamente.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

export default userRoute
