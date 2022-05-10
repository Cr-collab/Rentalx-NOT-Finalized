import dayjs from 'dayjs'

import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { CreateRentalUseCase } from './CreateRentalUseCase'

let rentalsRepositoryInMemory: RentalsRepositoryInMemory
let createRentalUseCase: CreateRentalUseCase

describe('Create Rental', () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate()
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory)
  })

  it('should be able to create a new  rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '12345',
      car_id: '124151',
      expected_return_date: dayAdd24Hours
    })

    console.log(rental)

    expect(rental).toHaveProperty('id')
  })

  it('should not  be able to create a new  rental if there another open to the same user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '124151',
        expected_return_date: dayAdd24Hours
      })

      const rental = await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '124151',
        expected_return_date: dayAdd24Hours
      })

      console.log(rental)
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not  be able to create a new  rental if there another open to the same car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '124151',
        expected_return_date: dayAdd24Hours
      })

      await createRentalUseCase.execute({
        user_id: '345',
        car_id: '124151',
        expected_return_date: dayAdd24Hours
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not  be able to create a new  rental with invalid return time', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '124151',
        expected_return_date: dayjs().toDate()
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})
