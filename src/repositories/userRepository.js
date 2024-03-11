import User from '../models/user.js'

export const createUserRepository = async (userData) => {
  const user = new User(userData)
  await user.save()
  return user
}

export const findUserByUsernameRepository = async (username) => {
  const user = await User.findOne({
    where: {
      username: username,
    },
  })
  return user
}
export const updateIsAdminRepository = async (id) => {
  const [updatedRowsCount, updatedRows] = await User.update(
    { isAdmin: true },
    { where: { id } }
  );

  if (updatedRowsCount > 0) {
    return updatedRows;
  }

  return true;
};