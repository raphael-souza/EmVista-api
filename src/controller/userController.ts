import { Request, Response } from 'express';
import { getManager } from 'typeorm'
import { User } from '../entity/User'

export class UserController {
  index(req: Request, res: Response) {
      console.log('****index****');
      return res.send({ userID: req.userId, requestMessage: "index users - tá top !" });
  }

  async save(user: User) {

    console.log(user)
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