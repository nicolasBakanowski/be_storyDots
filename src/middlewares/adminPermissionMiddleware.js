import { StatusCodes } from 'http-status-codes'

export const adminPermissionMiddleware = (req, res, next) => {
  const isAdmin = req.user && req.user.isAdmin
  if (isAdmin) {
    next()
  } else {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ error: 'Insufficient permissions' })
  }
}
