const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        "username": "Jammy",
        "email": "Jammy@hotmail.com",
        "password": "password12345"
      },
      {
        "username": "Larry",
        "email": "larry@gmail.com",
        "password": "password12345"
      },
      {
        "username": "Sam",
        "email": "sam@aol.com",
        "password": "password12345"
      },
      {
        "username": "jhon",
        "email": "jhon@msn.com",
        "password": "password12345"
      },
      {
        "username": "Mike",
        "email": "mike@yahoo.com",
        "password": "password12345"
      }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;