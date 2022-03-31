import { getRepository } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { Specification } from '@modules/cars/entities/Specification'
import {
  ISpecifactionRepository,
  ICreateSpecificationDTO,
} from '@modules/cars/repositories/implementations/ISpecifactionRepository'

class SpecificationsRepository implements ISpecifactionRepository {
  private specifications: Repository<Specification>

  constructor() {
    this.specifications = getRepository(Specification)
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = this.specifications.findOne({ name })
    return specification
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.specifications.create({ name, description })

    await this.specifications.save(specification)
  }
}

export { SpecificationsRepository }
