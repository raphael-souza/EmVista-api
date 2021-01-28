import { createConnection } from 'typeorm';

createConnection().then(async connection => {
  console.log('Conected whith database');

})
.catch(error => console.log(error));
