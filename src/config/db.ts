import { createConnection } from 'typeorm';

export const connectServerInDB = async () => {
  try {
    const connection = await createConnection();
    await connection.synchronize();

    console.info(`App conectado ao DB ${connection.options.database}`);

    process.on('SIGINT', () => {
      connection.close().then(() => console.log('Conexão com o DB fechada.'));
    });
  } catch (err) {
    console.info("Não foi possível se conectar a base de dados!");
    console.log(err.message);
  }


 
}