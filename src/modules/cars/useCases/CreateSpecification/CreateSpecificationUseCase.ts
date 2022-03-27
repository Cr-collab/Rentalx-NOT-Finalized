import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppError'
import { ISpecifactionRepository } from '../../repositories/implementations/ISpecifactionRepository'

interface IRequest {
  name: string
  description: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecifactionRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new AppError(' Specification Already Exists')
    }

    await this.specificationsRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase }
