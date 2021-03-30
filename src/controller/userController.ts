import { getManager } from 'typeorm'
import { User } from '../entity/User'

export class UserController {

  async save(user: User) {
    const userSaved = await getManager().save(user);
    
    return userSaved;
  }

  async returnAll() {
    const users = await getManager().find(User);

    return users
  }

  async getById(id: number) {
    const user = await getManager().findOne(User, id);

    return user;
  }

  async getFinAssetsByUserId(id: string) {
    const user = await getManager().findOne(User, id,
      {
        relations: ['financialAssets']
      }
    );

    return user.financialAssets;
  }
}