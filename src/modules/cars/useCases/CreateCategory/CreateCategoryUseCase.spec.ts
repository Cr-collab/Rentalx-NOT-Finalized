import { AppError } from '../../../../errors/AppError'
import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe('Create Category', () => {
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    )
  })

  it('shouls be able to create a new category', async () => {
    const category = {
      name: 'Category test',
      description: 'Category description test'
    }
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    )

    console.log(categoryCreated)
    expect(categoryCreated).toHaveProperty('id')
  })

  it(' shouls not be able create nev category eith name exists ', async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category description Test'
      }

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
