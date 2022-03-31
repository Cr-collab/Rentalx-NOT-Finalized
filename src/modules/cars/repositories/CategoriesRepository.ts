import { getRepository } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { Category } from '@modules/cars/entities/Category'
import {
  ICretaeCategoryDTO,
  ICategoriesRepository,
} from '@modules/cars/repositories/implementations/ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ description, name }: ICretaeCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category | undefined> {
    // Select * from categories where name = "name" limit 1

    const category = await this.repository.findOne({ name })
    return category
  }
}

export { CategoriesRepository }
