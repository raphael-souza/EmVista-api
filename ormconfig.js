module.exports = {
   "url": process.env.DATABASE_URL,
   "type": "postgres",
   // "host": "localhost",
   // "port": 5432,
   // "username": "raphael",
   // "password": "root",
   // "database": "em_vista",
   // "synchronize": true,
   // "logging": false,
   "entities": [
      "dist/entity/**/*.js"
   ],
   "migrations": [
      "dist/database/migration/*.js"
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