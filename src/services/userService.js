import { createUserRepository, findUserByUsernameRepository} from '../repositories/userRepository.js';
import { encryptPassword } from "../utils/passwordUtil.js"

export const createUserService = async (body) => {
    try {
        console.log("estees el body",body)
        body.password = await encryptPassword(body.password);
        console.log(body.password, "este es el password")
        console.log("este es el body completo", body)
        const newUser = await createUserRepository(body);
        if (!newUser) {
            throw new Error('Failed to create user');
        }
        return newUser;
    } catch (error) {
        throw error;
    }
};

export const findUserByUsernameService = async (username) => {
    try {
        const user = await findUserByUsernameRepository(username);
        return user;
    } catch (error) {
        throw error;
    }
};



