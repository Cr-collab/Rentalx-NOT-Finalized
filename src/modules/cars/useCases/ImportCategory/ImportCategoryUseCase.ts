import { CategoryRepository } from '../../repositories/CategoryRepository'
import fs from 'fs'
import { parse } from 'csv-parse'

interface IImportCategory {
  name: string
  description: string
}
class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)

      const categories: IImportCategory[] = []

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', async (file) => {
          const [name, description] = file

          categories.push({
            name,
            description,
          })
        })
        .on('end', () => {
          resolve(categories)
          fs.promises.unlink(file.path)
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map((category) => {
      const categoryAlreadyExists = this.categoriesRepository.findByName(
        category.name,
      )

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create(category)
      }
    })
  }
}

export { ImportCategoryUseCase }
