import { Rental } from '../infra/typeorm/entities/Rental'

interface IRentalsRepository {
  create(
    car_id: string,
    user_id: string,
    expected_return_date: Date
  ): Promise<Rental>
  findOpenRentalByCar(car_id: string): Promise<Rental | undefined>
  findOpenRentalsByUser(user_id: string): Promise<Rental | undefined>
}

export { IRentalsRepository }
