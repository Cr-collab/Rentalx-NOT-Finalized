import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { getRepository } from 'typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { Car } from '../entities/Car'

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>

  constructor() {
    this.repository = getRepository(Car)
  }


  async create({
    name,
    description,
    brand,
    category_id,
    dayly_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      category_id,
      dayly_rate,
      fine_amount,
      license_plate,
    })

    await this.repository.save(car)

    return car
  }
  async findyByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = await this.repository.findOne({ license_plate })
    return car
  }


  list(): Promise<Car[] | undefined> {
    const cars = this.repository.find()
    return cars
  }


}

export { CarsRepository }
