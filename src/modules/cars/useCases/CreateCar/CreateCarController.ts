import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCarUseCase } from './CreateCarUseCase'

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      fine_amount,
      category_id,
      brand,
      dayly_rate,
      license_plate,
    } = request.body

    const createCarsUseCase = container.resolve(CreateCarUseCase)
    const car = await createCarsUseCase.execute({
      name,
      description,
      fine_amount,
      category_id,
      brand,
      dayly_rate,
      license_plate,
    })

    return response.status(201).json(car)
  }
}

export { CreateCarController }
