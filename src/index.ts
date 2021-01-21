import "reflect-metadata";
import * as express from "express";
// import * as bodyParser from "body-parser";
// import * as helmet from "helmet";
// import * as cors from "cors";
import routes from "./routes";
// import { createConnection } from 'typeorm';
import './database/conect'
// const cors = require('cors');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server EmVista started in localhost:3000');
})
// createConnection()
//   .then(async connection => {
//     // app instance
//     const app = express();
    
//     // midlewares
//     app.use(cors());
//     app.use(bodyParser.json());
//     app.use(helmet());

//     app.use(routes);

//     app.listen(3333, () => {
//       console.log("emVista started ! in port 3333");
//     });
//   })
//   .catch(error => console.log(error));


