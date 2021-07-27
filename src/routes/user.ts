import { Router } from 'express';
import AuthController from '../useCases/authUser/AuthController';
import authMiddleware from '../middleware/authMiddleware';

import { createUserController } from '../useCases/createUser';
import { PostgresUserRepository } from '../repositories/implementations/PostgresUserRepository'
import * as jwt from "jsonwebtoken";

export const routerUSer = Router();
const userRepository = new PostgresUserRepository();

// salva user
routerUSer.post('/', async (req, res) => {
  return createUserController.handle(req, res);
});

//busca user 
routerUSer.get('/', async (req, res) => {
  const users = await userRepository.returnAll();
  res.json(users);
});

// retornar todos os ativos financeiros de um usuário
routerUSer.get('/financial-assets/:userId', async (req, res) => {
  const userId = req.params.userId;
  const finAssets = await userRepository.getFinAssetsByUserId(userId);

  res.json({ "ativos": finAssets, "message": "ativos listados com sucesso" });
});

// autenticacao retornando token
routerUSer.post('/auth', AuthController.authenticate);

routerUSer.get('/signin', authMiddleware, userRepository.index);