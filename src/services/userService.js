import {
  createUserRepository,
  findUserByUsernameRepository,
} from '../repositories/userRepository.js'
import { encryptPassword } from '../utils/passwordUtil.js'

export const createUserService = async (body) => {
  try {
    body.password = await encryptPassword(body.password)
    const newUser = await createUserRepository(body)
    if (!newUser) {
      throw new Error('Failed to create user')
    }
    return newUser
  } catch (error) {
    throw error
  }
}

export const findUserByUsernameService = async (username) => {
  try {
    const user = await findUserByUsernameRepository(username)
    return user
  } catch (error) {
    throw error
  }
}
