import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entity/User';

class UserController {
    index(req: Request, res: Response) {
        return res.send({ userID: req.userId });
    }
    async store(req:Request, res:Response) {
        const repository = getRepository(User);
        const {email, password} = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            // conflito 
            return res.sendStatus(409);
        }
        const user = repository.create({email, password});
        await repository.save(user);
 
        return res.json(user);
    }
}

export default new UserController







// import {getRepository} from "typeorm";
// import {NextFunction, Request, Response} from "express";
// import {User} from "../entity/User";

// export class UserController {

//     private userRepository = getRepository(User);

//     async all(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.find();
//     }

//     async one(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.findOne(request.params.id);
//     }

//     async save(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.save(request.body);
//     }

//     async remove(request: Request, response: Response, next: NextFunction) {
//         let userToRemove = await this.userRepository.findOne(request.params.id);
//         await this.userRepository.remove(userToRemove);
//     }

// }