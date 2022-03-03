import { Category } from '../../model/Category'
import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository'

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}

export { ListCategoryUseCase }
