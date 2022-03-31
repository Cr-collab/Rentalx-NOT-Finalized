import { Category } from '@modules/cars/entities/Category'

interface ICretaeCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category | undefined>
  list(): Promise<Category[]>
  create({ name, description }: ICretaeCategoryDTO): Promise<void>
}

export { ICategoriesRepository, ICretaeCategoryDTO }
