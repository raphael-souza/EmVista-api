import User from "../../entities/User";
import { ImailProvider } from "../../providers/ IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase {
  
  constructor (
    private userRepository: IUserRepository,
    private mailProvider: ImailProvider) {
      // constructor
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExistis = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExistis) {
      throw new Error("User already existis");
    }

    const user = new User(data);
    await this.userRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "equipe EmVista",
        email: "contato@emvistaapp.com"
      },
      subject: "Seja Bem vindo a plataforma!",
      body: "<h2> Olá! </h2><p> você já pode fazer login na plataforma.</p>"

    })
  }
  
}