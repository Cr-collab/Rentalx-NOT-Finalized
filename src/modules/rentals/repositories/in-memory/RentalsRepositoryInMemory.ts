import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental'
import { IRentalsRepository } from '../IRentalsRepository'

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = []

  async create(
    car_id: string,
    user_id: string,
    expected_return_date: Date
  ): Promise<Rental> {
    const rental = Object.assign({
      car_id,
      user_id,
      expected_return_date
    })

    this.rentals.push(rental)

    return rental
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental | undefined> {
    return this.rentals.find(
      rental => rental.car_id === car_id && rental.end_date === null
    )
  }
  async findOpenRentalsByUser(user_id: string): Promise<Rental | undefined> {
    return this.rentals.find(
      rental => rental.user_id === user_id && rental.end_date === null
    )
  }
}

export { RentalsRepositoryInMemory }
