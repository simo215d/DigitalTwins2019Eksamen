require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": "pwd123",
    "database": "TwinShips",
    "host": "127.0.0.1",
    "port": "32768",
    "dialect": "mysql"
  },
  /*
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  */
}
