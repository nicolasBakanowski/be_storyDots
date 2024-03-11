import jsonwebtoken  from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
const { verify } = jsonwebtoken
export const validationTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Missing authorization header' });
    }
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Invalid token' });
    }
};
