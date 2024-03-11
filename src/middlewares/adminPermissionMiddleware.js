import { StatusCodes } from 'http-status-codes'

export const adminPermissionMiddleware = (req, res, next) => {
  if (req.user.user.isAdmin) {
    next()
  } else {
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ error: 'Insufficient permissions' })
  }
}
