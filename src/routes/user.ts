import { Router } from 'express';
import AuthController from '../useCases/authUser/AuthController';
import { UserController } from '../useCases/createUser/userController';
import { User } from '../entity/User';
import authMiddleware from '../middleware/authMiddleware';

import * as jwt from "jsonwebtoken";

export const routerUSer = Router();

const userController = new UserController();
// user/

// salva user
routerUSer.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    const user = new User(name, email, password);
    const userSaved = await userController.save(user);
    console.log("salvou o usuário");
    const token = jwt.sign({ id: user.id}, 'secret', { expiresIn: '1d'});
    res.json({userSaved, token});
});

//busca user 
routerUSer.get('/', async (req, res) => {
    const users = await userController.returnAll();
    res.json(users);
});

// retornar todos os ativos financeiros de um usuário
routerUSer.get('/financial-assets/:userId', async (req, res) => {
    const userId = req.params.userId;
    const finAssets = await userController.getFinAssetsByUserId(userId);

    res.json({ "ativos": finAssets, "message": "ativos listados com sucesso" });
});

// autenticacao retornando token
routerUSer.post('/auth', AuthController.authenticate);

routerUSer.get('/signin', authMiddleware, userController.index);