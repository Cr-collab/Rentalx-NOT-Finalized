import { getRepository } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification'
import {
  ISpecifactionRepository,
  ICreateSpecificationDTO,
} from '@modules/cars/repositories/ISpecifactionRepository'

class SpecificationsRepository implements ISpecifactionRepository {
  private specifications: Repository<Specification>

  constructor() {
    this.specifications = getRepository(Specification)
  }


  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.specifications.findOne({ name })
    return specification
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.specifications.create({ name, description })

    await this.specifications.save(specification)

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.specifications.findByIds(ids);
    return specifications
  }
}

export { SpecificationsRepository }
