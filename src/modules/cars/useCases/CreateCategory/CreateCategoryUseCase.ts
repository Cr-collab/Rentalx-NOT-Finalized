import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

/**
 *  []  - Definir o tipo de retorno,
 *  [x]  - Altrerar o retorno de erro
 */
class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const cateryAlreadyExists = await this.categoriesRepository.findByName(name)
    if (cateryAlreadyExists) {
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
