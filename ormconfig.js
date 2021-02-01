module.exports = {
   "url": process.env.DATABASE_URL,
   "type": "postgres",
   // "host": "localhost",
   // "port": 5432,
   // "username": "raphael",
   // "password": "root",
   // "database": "em_vista",
      "synchronize": true,
      "ssl": true,
      "extra": {
         "ssl": {
             "rejectUnauthorized": false
         }
     },
   "entities": [
      process.env.ENTITIES_PATH
   ],
   "migrations": [
      process.env.MIGRATIONS_PATH
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber"
   }
}