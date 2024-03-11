import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { compare } = bcrypt;
const { sign } = jwt;

export const validatePasswordService= async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
};
export const generateTokenService = async (user) => {
    const token = sign({ user: user,  }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

