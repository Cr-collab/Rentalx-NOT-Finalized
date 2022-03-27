import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../errors/AppError'
import { UsersRepository } from '../modules/accounts/repositories/UsersRepository'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(
      token,
      '2cff735a4674d99f396fede105f6eb85'
    ) as IPayload

    const usersRepository = new UsersRepository()

    const user = usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('User does exists', 401)
    }
    request.user = {
      id: user_id
    }
    next()
  } catch {
    throw new AppError('Invalid token', 401)
  }
}
