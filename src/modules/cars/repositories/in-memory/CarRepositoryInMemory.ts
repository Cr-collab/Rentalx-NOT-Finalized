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
    id
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
      id
    })

    this.cars.push(car)

    return car
  }

  async findyByLicensePlate(license_plate: string): Promise<undefined | Car> {
    const car = this.cars.find((car) => car.license_plate === license_plate)
    return car
  }

  async list(brand?: string, name?: string, category_id?: string): Promise<Car[] | undefined> {
    const carsAvailable = this.cars
      .filter(car => {
        if (car.available === true || ((brand && car.brand === brand) || (name && car.name === name) || (category_id && car.category_id === category_id))) {
          return car
        }
      })


    return carsAvailable
  }

  async findById(car_id: string): Promise<Car | undefined> {
    const carsExists = this.cars.find(car => car.id === car_id);

    return carsExists
  }

}

export { CarRepositoryInMemory }
