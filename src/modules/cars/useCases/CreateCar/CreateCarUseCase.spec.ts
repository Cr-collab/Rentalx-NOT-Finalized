import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { CreateCarUseCase } from './CreateCarUseCase'
let createCarUseCase: CreateCarUseCase
let carsRepository: ICarsRepository

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new CarRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepository)
  })

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car 1',
      description: 'description car',
      brand: 'brand car',
      category_id: '0000',
      license_plate: '1541545',
      dayly_rate: 100,
      fine_amount: 60,
    })

    expect(car).toHaveProperty('id')
  })

  it('should not be able to create a car with exists license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Name Car 2',
        description: 'description car',
        brand: 'brand car',
        category_id: '0000',
        license_plate: '1541545',
        dayly_rate: 100,
        fine_amount: 60,
      })

      await createCarUseCase.execute({
        name: 'Name Car',
        description: 'description car',
        brand: 'brand car',
        category_id: '0000',
        license_plate: '1541545',
        dayly_rate: 100,
        fine_amount: 60,
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to create a car with available true', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car',
      description: 'description car',
      brand: 'brand car',
      category_id: '0000',
      license_plate: '1541545',
      dayly_rate: 100,
      fine_amount: 60,
    })

    expect(car.available).toEqual(true)
  })
})
