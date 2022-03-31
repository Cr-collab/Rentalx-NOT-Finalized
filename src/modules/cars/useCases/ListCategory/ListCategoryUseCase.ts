import { inject, injectable } from 'tsyringe'
import { Category } from '@modules/cars/entities/Category'
import { ICategoriesRepository } from '@modules/cars/repositories/implementations/ICategoriesRepository'

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list()

    return categories
  }
}

export { ListCategoryUseCase }
