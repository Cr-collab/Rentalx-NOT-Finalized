import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO'
import { Car } from '@modules/cars/infra/typeorm/entities/Car'
import { ICarsRepository } from '../ICarsRepository'

class CarRepositoryInMemory implements ICarsRepository {
  cars: Car[] = []
  async create({
    name,
    description,
    brand,
    category_id,
    dayly_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car()

    Object.assign(car, {
      name,
      description,
      brand,
      category_id,
      dayly_rate,
      fine_amount,
      license_plate,
    })

    this.cars.push(car)

    return car
  }

  async findyByLicensePlate(license_plate: string): Promise<undefined | Car> {
    const car = this.cars.find((car) => car.license_plate === license_plate)
    return car
  }
}

export { CarRepositoryInMemory }
