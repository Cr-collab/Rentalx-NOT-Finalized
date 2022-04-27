import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecifactionRepository } from "../ISpecifactionRepository";

class SpecificationInMemory implements ISpecifactionRepository {
  specifications: Specification[] = [];

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = this.specifications.find(spec => spec.name === name);
    return specification
  }


  async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name
    });

    await this.specifications.push(specification);


    return specification
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter(specification => ids.includes(specification.id));

    return allSpecifications
  }

}

export { SpecificationInMemory }