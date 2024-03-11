import { findUserByUsernameService } from '../services/userService.js';
import { validatePasswordService, generateTokenService } from '../services/authService.js';
import { StatusCodes } from 'http-status-codes'

export const loginController = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        console.log("username: ", req.body)
        const user = await findUserByUsernameService(username);
        if (!user) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid username or password' });
            return;
        }
        const passwordIsValid = await validatePasswordService(password, user.password);
        if (!passwordIsValid) {
            res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid username or password' });
            return;
        }
        const token = await generateTokenService(user);
        res.status(StatusCodes.OK).json({ token });
    } catch (error) {
        next(error);
    }
};

