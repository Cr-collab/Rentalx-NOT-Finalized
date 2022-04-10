import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) { }
  async execute({ name, brand, category_id }: IRequest): Promise<Car[] | undefined> {
    const cars = await this.carsRepository.list(name, brand, category_id);

    return cars
  }
}

export { ListCarsUseCase }