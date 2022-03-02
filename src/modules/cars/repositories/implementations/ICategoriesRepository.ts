import { Category } from '../../model/Category'

interface ICretaeCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, description }: ICretaeCategoryDTO): void
}

export { ICategoriesRepository, ICretaeCategoryDTO }
