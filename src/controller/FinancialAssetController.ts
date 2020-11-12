import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm'
import { FinancialAssets} from '../entity/FinancialAsset';

export const getFinAssets = async (request: Request, response: Response) => {
  const finanssialAssets = await getRepository(FinancialAssets).find();
  
  return response.json(finanssialAssets);
}

export const getFinAsset = async (request: Request, response: Response) => {
  const { id } = request.params;
  const finAsset = await getRepository(FinancialAssets).findOne(id);
  
  return response.json(finAsset);
}


export const saveFinAsset = async (request: Request, response: Response) => {
  const finAsset = await getRepository(FinancialAssets).save(request.body);

  response.json(finAsset);
}