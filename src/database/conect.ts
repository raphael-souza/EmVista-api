import { createConnection } from 'typeorm';

createConnection().then( () => console.log('Conected whith database'));