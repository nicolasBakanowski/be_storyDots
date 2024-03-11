import User from '../models/user.js';

export const createUserRepository = async(userData) => {
    const user = new User(userData);
    await user.save();
    return user;
}

export const findUserByUsernameRepository =  async(username) => {
    const user = await User.findOne({
        where: {
          username: username,
        },
      });    
    return user;
}

