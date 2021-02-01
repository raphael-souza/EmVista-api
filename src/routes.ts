import { Router, Request, Response } from 'express';
import { getFinAsset, getFinAssets, saveFinAsset } from './controller/FinancialAssetController';
import { finishedTask, getTask, getTasks, removedTask, savetask, updateTask } from './controller/TaskController';

import authMiddleware from './middlewares/authMiddleware';

import UserController from './controller/UserController';
import AuthController from './controller/AuthController'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: "AOBA! chique!?",
    description: "API Em Vista online, controle financeiro.",
    routes: [
      '/tasks',
      '/task/:id',
      '/task',
      '/task/:id',
      '/task/:id',
      '/task/:id',
      '/financial-assets',
      '/financial-asset/:id',
      '/financial-asset',
      '/users',
      '/auth',
      '/users',
    ]
  })
});

routes.get('/tasks', getTasks);
routes.get('/task/:id', getTask)
routes.post('/task', savetask);
routes.put('/task/:id', updateTask);
routes.patch('/task/:id', finishedTask);
routes.delete('/task/:id', removedTask);

routes.get('/financial-assets', getFinAssets);
routes.get('/financial-asset/:id', getFinAsset);
routes.post('/financial-asset', saveFinAsset);

// ------- //

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);
routes.get('/users', authMiddleware, UserController.index);

export default routes;