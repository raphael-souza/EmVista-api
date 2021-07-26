import { MailtrapMailProvider } from "../../providers/implementations/MailtrapProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUsecase";

// cada caso de uso precisa ter um index 
const postgresUserRepository = new PostgresUserRepository();
const mailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailProvider
);

// essa constante precisa ser chamada no routes para fazer a magia acontecer 
const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };