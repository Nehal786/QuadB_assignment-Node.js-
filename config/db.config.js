const { Sequelize } = require("sequelize");

function createConnection() {

    let sequelize = new Sequelize("quadb", "root", "root", {
        host: "127.0.0.1",
        dialect: "mysql",
        // define: {
        //     timestamps: false
        // },
        // pool: dbConfig.pool
    });

    sequelize.authenticate().then(() => {
        console.log('connected successfully');
    }).catch((error) => {
        console.log("error occurred in connecting db", error);
    });

    return { sequelize }

}

let { sequelize } = createConnection();

function executeWithSync(promiseCallback) {
    sequelize.sync().then(() => promiseCallback);
}

module.exports = { sequelize, executeWithSync };