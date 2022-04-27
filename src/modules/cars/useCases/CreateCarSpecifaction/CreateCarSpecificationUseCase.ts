import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecifactionRepository } from "@modules/cars/repositories/ISpecifactionRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {

  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecifactionRepository
  ) { }
  async execute({ car_id, specification_id }: IRequest): Promise<Car> {
    const carsExists = await this.carsRepository.findById(car_id);

    if (!carsExists) {
      throw new AppError('Car does not exist')
    }

    const specifications = await this.specificationsRepository.findByIds(specification_id);

    carsExists.specifications = specifications;

    await this.carsRepository.create(carsExists)
    return carsExists
  }

}


export { CreateCarSpecificationUseCase }