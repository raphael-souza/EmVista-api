import { Router, Request, Response} from 'express';
import { finishedTask, getTask, getTasks, removedTask, savetask, updateTask } from './controller/TaskController';

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "AOBA! chique!?"})
});

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask)
routes.post('/tasks', savetask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/task/:id', removedTask);


export default routes;