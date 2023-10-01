const env = process.env.NODE_ENV || 'development'
// const config = require("../configs/db.config")[env];
const Sequelize = require("sequelize");



const sequelize = new Sequelize(
    "quadb",
    "root",
    "root",
    {
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
        
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

let user = require('./userModel')(sequelize, Sequelize);




db.user = user;


module.exports = db;