import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";
import { SpecificationInMemory } from "@modules/cars/repositories/in-memory/SpecifictionInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
  })

  it("should not be able to add a new specification to a now-existent  car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specification_id = ["54321"]
      await createCarSpecificationUseCase.execute({ car_id, specification_id });
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "Description Car",
      dayly_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category"
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "Description Car",
      name: "Description Car",
    })




    const specificationsCar = await createCarSpecificationUseCase.execute({ car_id: car.id, specification_id: [specification.id] });

    expect(specificationsCar).toHaveProperty("specifications");
    expect(specificationsCar.specifications?.length).toBe(1);
  })
})