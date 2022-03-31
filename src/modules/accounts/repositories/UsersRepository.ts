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
    avatar,
    id
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email })
    return user
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ id })
    return user
  }
}

export { UsersRepository }
