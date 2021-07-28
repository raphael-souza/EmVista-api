import User from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase {
  
  constructor (
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider) {
      // constructor
  }

  async execute(data: ICreateUserRequestDTO):Promise<User> {
    const userAlreadyExistis = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExistis) {
      throw new Error("User already existis");
    }

    const user = new User();

    user.name = data.name;
    user.password = data.password;
    user.email = data.email;
    
    const userSaved = await this.userRepository.save(user);

    if (userSaved) {
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
  
      });

      return userSaved;
    }
    
  }
  
}