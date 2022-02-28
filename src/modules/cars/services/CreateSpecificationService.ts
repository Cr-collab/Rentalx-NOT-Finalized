import { ISpecifactionRepository } from '../repositories/ISpecifactionRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecifactionRepository) {}

  excute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name,
    )

    if (specificationAlreadyExists) {
      throw new Error(' Specification Already Exists')
    }

    this.specificationsRepository.create({
      name,
      description,
    })
  }
}

export { CreateSpecificationService }
