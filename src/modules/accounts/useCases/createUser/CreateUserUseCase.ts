import { inject, injectable } from 'tsyringe'
import { ICreateUsersDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepository } from '../../repositories/UsersRepository'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license
  }: ICreateUsersDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license
    })
  }
}

export { CreateUserUseCase }
