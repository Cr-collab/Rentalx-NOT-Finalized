import { Category } from '@modules/cars/entities/Category'
import {
  ICategoriesRepository,
  ICretaeCategoryDTO,
} from '@modules/cars/repositories/implementations/ICategoriesRepository'

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = []

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
  async list(): Promise<Category[]> {
    const list = this.categories
    return list
  }
  async create({ name, description }: ICretaeCategoryDTO): Promise<void> {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
    })

    this.categories.push(category)
  }
}

export { CategoriesRepositoryInMemory }
