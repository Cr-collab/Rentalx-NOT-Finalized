import { Specification } from '../../entities/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecifactionRepository {
  findByName(name: string): Promise<Specification>
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
}

export { ISpecifactionRepository, ICreateSpecificationDTO }
