import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan'
import 'reflect-metadata';

import { connectServerInDB } from './config/db';
import { routerUSer } from './routes/user';
import { routerFinancialAsset } from './routes/fiancialAsset';

/**
 * cria a aplicação 
 */

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

connectServerInDB();

// Config de rotas 
app.use('/user', routerUSer);
app.use('/financial-asset', routerFinancialAsset);
app.use('/', (req, res) => res.send('Api Em Vista'));
