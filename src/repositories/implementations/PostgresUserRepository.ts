import User from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { Request, Response } from 'express';
import { getManager } from 'typeorm'
import { FinancialAsset } from "../../entities/FinancialAsset";


export class PostgresUserRepository implements IUserRepository {
  
  async index(res: Response) {
    res.json({ status: 200 })
  }

  async findByEmail(email: string): Promise<User> {
    const user = await getManager().findOne(User, {email: email});

    return user;
  }
  async save(user: User) {
    const userSaved = await getManager().save(user);
    return userSaved;
  }

  async returnAll():Promise<User[]>{
    const users = await getManager().find(User);

    return users
  }

  async getById(id: number):Promise<User> {
    const user = await getManager().findOne(User, id);

    return user;
  }

  async getFinAssetsByUserId(id: string):Promise<FinancialAsset[]> {
    const user = await getManager().findOne(User, id,
      {
        relations: ['financialAssets']
      }
    );

    if (!!user) {
      console.log(user.id);
      return user.financialAssets;

    } else {
      console.log('não localizou User pelo Id');
      throw new Error("not found");
    }

  }
}