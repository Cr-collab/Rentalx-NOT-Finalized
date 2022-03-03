import { ISpecifactionRepository } from '../../repositories/implementations/ISpecifactionRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecifactionRepository) {}

  execute({ name, description }: IRequest): void {
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

export { CreateSpecificationUseCase }
