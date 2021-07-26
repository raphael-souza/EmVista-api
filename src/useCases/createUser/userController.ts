// import { Request, Response } from 'express';
// import { getManager } from 'typeorm'
// import { User } from '../../entities/User'

// export class UserController {

//   async index(res: Response) {
//     res.json({ status: 200 })
//   }

//   async save(user: User) {
//     const userSaved = await getManager().save(user);
//     console.log(userSaved);

//     return userSaved;
//   }

//   async returnAll() {
//     const users = await getManager().find(User);

//     return users
//   }

//   async getById(id: number) {
//     const user = await getManager().findOne(User, id);

//     return user;
//   }

//   async getFinAssetsByUserId(id: string) {
//     const user = await getManager().findOne(User, id,
//       {
//         relations: ['financialAssets']
//       }
//     );

//     if (!!user) {
//       console.log(user.id);
//       return user.financialAssets;

//     } else {
//       console.log('não localizou User pelo Id');
//       return {}
//     }

//   }
// }