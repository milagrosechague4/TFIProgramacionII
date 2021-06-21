module.exports = {
    "development": {
      "username": "root",
      "password": "root",
      "database": "petfinder",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "port": "8889",
      "define": {
        "onDelete": "cascade"
      }
    },
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
  }
  