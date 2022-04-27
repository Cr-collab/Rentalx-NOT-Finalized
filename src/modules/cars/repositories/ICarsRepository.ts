import { ICreateCarDTO } from '../dtos/ICreateCarDTO'
import { Car } from '../infra/typeorm/entities/Car'

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>
  findyByLicensePlate(license_plate: string): Promise<Car | undefined>
  list(brand?: string, name?: string, category_id?: string): Promise<Car[] | undefined>
  findById(car_id: string): Promise<Car | undefined>
}

export { ICarsRepository }
