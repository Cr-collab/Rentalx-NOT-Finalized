import { ICreateUsersDTO } from 'src/modules/accounts/dtos/ICreateUserDTO'
import { User } from '../../entities/User'
import { IUsersRepository } from 'src/modules/accounts/repositories/implementations/IUsersRepository'

class UsersRepositoryInMemory implements IUsersRepository {
  repository: User[] = []

  async create({
    driver_license,
    email,
    password,
    name
  }: ICreateUsersDTO): Promise<void> {
    const user = new User()

    Object.assign(user, {
      driver_license,
      email,
      name,
      password
    })

    this.repository.push(user)
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.repository.find(user => user.email === email)
    return user
  }
  async findById(id: string): Promise<User | undefined> {
    return this.repository.find(user => user.id === id)
  }
}

export { UsersRepositoryInMemory }
