import { getRepository, Repository } from 'typeorm'
import { ICreateUsersDTO } from '../dtos/ICreateUserDTO'
import { User } from '../entities/User'
import { IUsersRepository } from './implementations/IUsersRepository'

class UsersRepository implements IUsersRepository {
  private repository!: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    password,
    driver_license,
    email,
    username
  }: ICreateUsersDTO): Promise<void> {
    console.log(
      {
        name,
        password,
        driver_license,
        email,
        username
      },
      'Chegamos aqui'
    )

    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password
    })

    await this.repository.save(user)
  }
}

export { UsersRepository }
