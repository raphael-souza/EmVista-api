import { Router, Request, Response} from 'express';
import { getFinAsset, getFinAssets, saveFinAsset } from './controller/FinancialAssetController';
import { finishedTask, getTask, getTasks, removedTask, savetask, updateTask } from './controller/TaskController';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "AOBA! chique!?"})
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


export default routes;