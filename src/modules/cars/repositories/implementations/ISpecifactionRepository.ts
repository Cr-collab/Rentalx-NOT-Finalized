import { Specification } from '../../entities/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecifactionRepository {
  findByName(name: string): Specification
  create({ name, description }: ICreateSpecificationDTO): void
}

export { ISpecifactionRepository, ICreateSpecificationDTO }
