import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUsecase";

import * as jwt from "jsonwebtoken";

export class CreateUserController {

  constructor (private createUserUseCase: CreateUserUseCase) {
    // constructor
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, password} = request.body;

    console.log(request.body)
    try {
      console.info("criando user e notificando por email");
      const userSaved = await this.createUserUseCase.execute({
        name,
        email,
        password
      });

      //  return response.status(201).send();

      const token = jwt.sign({ id: userSaved.id}, 'secret', { expiresIn: '1d'});
      response.json({userSaved, token});
    } catch (err) {
      return response.status(401).json({message: err.message} || 'unespected error');
    }

  }

  
}