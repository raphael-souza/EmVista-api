import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUsecase";


export class CreateUserController {

  constructor (private createUserUseCase: CreateUserUseCase) {
    // constructor
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, password} = request.body;

    try {
      console.info("criando user e notificando por email");
      await this.createUserUseCase.execute({
        name,
        email,
        password
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(401).json({message: err.message} || 'unespected error');
    }

  }
}