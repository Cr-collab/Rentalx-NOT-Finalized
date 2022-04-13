import { CarRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory"
import { ListCarsUseCase } from "./ListCarsUseCase"
let carsRepositoryInMemory: CarRepositoryInMemory
let listCarsUseCase: ListCarsUseCase
describe("List Category", () => {
  beforeAll(() => {
    carsRepositoryInMemory = new CarRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory)
  })

  it("should be able to list all  available  cars", async () => {
    const carCreate = await carsRepositoryInMemory.create({
      name: "Audi A1",
      description: "Carro com espaço",
      dayly_rate: 240.0,
      license_plate: "CDE-456",
      fine_amount: 100,
      brand: "Audi",
      category_id: "27d60abd-20aa-4ce7-a522-6581eb92aacd"
    })

    const cars = await listCarsUseCase.execute({})
    expect(cars).toContainEqual(carCreate)
  })

  it("should be able to list all available cars by name ", async () => {
    const carCreate = await carsRepositoryInMemory.create({
      name: "Audi A2",
      description: "Carro com espaço",
      dayly_rate: 240.0,
      license_plate: "CDE-456",
      fine_amount: 100,
      brand: "Audi2",
      category_id: "27d60abd-20aa-4ce7-a522-6581eb92aacd"
    })

    const cars = await listCarsUseCase.execute({ name: "Audi A2", })

    expect(cars).toContainEqual(carCreate)
  })

  it("should be able to list all available cars by brand ", async () => {
    const carCreate = await carsRepositoryInMemory.create({
      name: "Audi A2",
      description: "Carro com espaço",
      dayly_rate: 240.0,
      license_plate: "CDE-456",
      fine_amount: 100,
      brand: "Audi2",
      category_id: "27d60abd-20aa-4ce7-a522-6581eb92aacd"
    })

    const cars = await listCarsUseCase.execute({ brand: "Audi2" })

    expect(cars).toContainEqual(carCreate)
  })

  it("should be able to list all available cars by category ", async () => {
    const carCreate = await carsRepositoryInMemory.create({
      name: "Audi A2",
      description: "Carro com espaço",
      dayly_rate: 240.0,
      license_plate: "CDE-456",
      fine_amount: 100,
      brand: "Audi2",
      category_id: "27d60abd-20aa-4ce7-a522-6581eb92aacd"
    })

    const cars = await listCarsUseCase.execute({ category_id: "27d60abd-20aa-4ce7-a522-6581eb92aacd" })

    expect(cars).toContainEqual(carCreate)
  })
})