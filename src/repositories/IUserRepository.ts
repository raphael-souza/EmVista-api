import { User } from "../entities/User";
// interface funciona como um adapter para o ORM ou qqr outro esquema usado pra persistir os dados 
export interface IUserRepository {
  // user deve ter email unico
  findByEmail(email: string): Promise<User>;
  save(user: User);
}