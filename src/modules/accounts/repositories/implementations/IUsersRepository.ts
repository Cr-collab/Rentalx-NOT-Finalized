import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO"


interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>
}

export { IUsersRepository }