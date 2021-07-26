import { User } from "../entities/User";
import { FinancialAsset } from "../entities/FinancialAsset";
// interface funciona como um adapter para o ORM ou qqr outro esquema usado pra persistir os dados 
export interface IUserRepository {
  // user deve ter email unico
  findByEmail(email: string): Promise<User>;
  save(user: User);
  returnAll(): Promise<User[]>;
  getById(id: number):Promise<User>;
  getFinAssetsByUserId(id: string):Promise<FinancialAsset[]>

}