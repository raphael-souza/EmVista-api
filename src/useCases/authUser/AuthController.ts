import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

import User from '../entity/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const {email, password} = req.body;
    const user = await repository.findOne({ where: { email }});
   
    if (!user) {
      console.log("--- user não pode ser autenticado!");
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id}, 'secret', { expiresIn: '1d'});
    delete user.password;
    return res.json({
      user,
      token,
    });
  }
}

export default new AuthController