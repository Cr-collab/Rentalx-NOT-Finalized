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
    specifications,
    id
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      category_id,
      dayly_rate,
      fine_amount,
      license_plate,
      specifications,
      id
    })

    await this.repository.save(car)

    return car
  }
  async findyByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = await this.repository.findOne({ license_plate })
    return car
  }


  async list(name?: string, brand?: string, category_id?: string): Promise<Car[] | undefined> {
    const carsQuery = this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", { brand })
    }

    if (category_id) {
      carsQuery.andWhere("c.category_id = :category_id", { category_id })
    }

    if (name) {
      carsQuery.andWhere("c.name = :name", { name })
    }
    const cars = await carsQuery.getMany()
    //pegar tudo
    return cars
  }


  async findById(car_id: string): Promise<Car | undefined> {
    const carsExists = this.repository.findOne(car_id);
    return carsExists
  }

}

export { CarsRepository }
