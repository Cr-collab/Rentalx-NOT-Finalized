import { inject, injectable } from 'tsyringe'
import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepository } from '../../repositories/UsersRepository'
import { hash } from 'bcryptjs'
import { AppError } from '../../../../errors/AppError'
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository | UsersRepositoryInMemory
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email)
    if (userAlreadyExists) {
      throw new AppError('User   already  exists')
    }
    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license
    })
  }
}

export { CreateUserUseCase }
