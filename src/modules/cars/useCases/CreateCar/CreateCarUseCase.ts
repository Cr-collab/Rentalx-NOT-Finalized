import { Car } from '@modules/cars/infra/typeorm/entities/Car'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { AppError } from '@shared/errors/AppError'
import { inject, injectable } from 'tsyringe'

interface IRequest {
  name: string
  description: string
  dayly_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  category_id: string
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}
  async execute({
    name,
    description,
    fine_amount,
    category_id,
    brand,
    dayly_rate,
    license_plate,
  }: IRequest): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findyByLicensePlate(
      license_plate,
    )

    if (carAlreadyExists) {
      throw new AppError('Car already exists')
    }

    const car = await this.carsRepository.create({
      name,
      description,
      fine_amount,
      category_id,
      brand,
      dayly_rate,
      license_plate,
    })

    return car
  }
}

export { CreateCarUseCase }
