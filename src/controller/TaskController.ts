import { getRepository } from 'typeorm';
import { Tasks } from '../entity/Tasks';
import { Request, Response } from 'express';

export const getTasks = async (request: Request, response: Response) => {
  const tasks = await getRepository(Tasks).find();
  return response.json(tasks);
};

export const getTask = async (request: Request, response: Response) => {
  const { id } = request.params;
  const task = await getRepository(Tasks).findOne(id);
  return response.json(task);
}

export const savetask = async (request: Request, response: Response) =>{
  const task = await getRepository(Tasks).save(request.body)
  response.json(task);
};

export const updateTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const task = await getRepository(Tasks).update(id, request.body);
  if (task.affected === 1) {
    const taskUpdated = await getRepository(Tasks).findOne(id);
    return response.json(taskUpdated);
  }

  return response.json({ message: "task not found!"});
};

export const finishedTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const task = await getRepository(Tasks).update(id, {
    finished: true
  });

  if (task.affected === 1) {
    const taskUpdated = await getRepository(Tasks).findOne(id);
    return response.json({message: "task finished"});
  }

  return response.json({ message: "task not found!"});
}; 


export const removedTask = async (request: Request, response: Response) => {
  const { id } = request.params;

  const task = await getRepository(Tasks).delete(id);

  if (task.affected === 1) {
    const taskUpdated = await getRepository(Tasks).findOne(id);
    return response.json({message: "task removed!"});
  }

  return response.json({ message: "task not found!"});
}; 


