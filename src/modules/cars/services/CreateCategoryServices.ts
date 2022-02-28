import { CategoryRepository } from '../repositories/CategoryRepository'
import { ICategoriesRepository } from '../repositories/ICategoriesRepository'

interface IRequest {
  name: string
  description: string
}

/**
 *  []  - Definir o tipo de retorno,
 *  [x]  - Altrerar o retorno de erro
 */
class CreateCategoryServices {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const cateryAlreadyExists = this.categoriesRepository.findByName(name)

    if (cateryAlreadyExists) {
      throw new Error('Category Already Exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryServices }
