import { ICreateUsersDTO } from '@modules/accounts/dtos/ICreateUserDTO'
import { User } from '@modules/accounts/infra/typeorm/entities/User'

interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>
  findByEmail(email: string): Promise<User | undefined>
  findById(id: string): Promise<User | undefined>
}

export { IUsersRepository }
