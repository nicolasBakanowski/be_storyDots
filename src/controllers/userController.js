import { findUserByUsernameService, createUserService } from '../services/userService.js';
import { StatusCodes } from 'http-status-codes';

export const createUserController = async (req, res, next) => {
    try {
        const userExistsForUsername = await findUserByUsernameService(req.body.username);
        if (userExistsForUsername ) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: `the user already exists.`
            });
            return;
        }
        const user = await createUserService(req.body);
        res.status(StatusCodes.CREATED).json({
            user
        });
    } catch (error) {
        next(error);
    }
};
