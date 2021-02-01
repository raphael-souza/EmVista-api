import { Request, Response, NextFunction } from 'express'
import * as jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}
export default function authMiddleware(
  req:Request, res:Response, next:NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();
 
  try {
    console.log('verificando Token')
    const data = jwt.verify(token, 'secret');
    const { id } = data as TokenPayload;

    req.userId = id;
    return next();
  } catch {
    console.error('token não foi validado corretamente!')
    return res.sendStatus(401);
  }

}