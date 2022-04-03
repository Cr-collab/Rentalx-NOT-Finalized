import { AppError } from '@shared/errors/AppError'
import { ICreateUsersDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    )
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  })
  it('should be able to authenticate an user', async () => {
    const user: ICreateUsersDTO = {
      driver_license: '000123',
      email: 'test@test.com',
      name: 'User test',
      password: 'test123',
    }

    await createUserUseCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    })

    console.log(result, 'sdhbfhjaBDFHBSDAHBDFSHBFDSHABH')
    expect(result).toHaveProperty('token')
  })

  it('should not be able to authenticate an nonexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'foo@example',
        password: '2152151',
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUsersDTO = {
        driver_license: '000123',
        email: 'test@test.com',
        name: 'User test',
        password: 'test123',
      }

      await createUserUseCase.execute(user)
      await authenticateUserUseCase.execute({
        email: user.email,
        password: `${user.password}ahdh`,
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
