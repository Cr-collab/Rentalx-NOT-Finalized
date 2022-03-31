import { Specification } from '@modules/cars/entities/Specification'

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecifactionRepository {
  findByName(name: string): Promise<Specification | undefined>
  create({ name, description }: ICreateSpecificationDTO): Promise<void>
}

export { ISpecifactionRepository, ICreateSpecificationDTO }
