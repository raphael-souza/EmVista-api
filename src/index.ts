import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
// import * as cors from "cors";
import routes from "./routes";
import { createConnection } from 'typeorm';

const cors = require('cors');

createConnection()
  .then(async connection => {
    // app instance
    const app = express();
    
    // midlewares
    app.use(cors());
    app.use(bodyParser.json());
    app.use(helmet());

    app.use(routes);

    app.listen(3333, () => {
      console.log("emVista started ! in port 3333");
    });
  })
  .catch(error => console.log(error));


