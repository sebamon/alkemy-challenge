const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.personaje = require("./personaje.model.js")(sequelize, Sequelize);
db.genero = require("./genero.model.js")(sequelize, Sequelize);
db.peliculaSerie = require("./peliculaSerie.model.js")(sequelize, Sequelize);

db.peliculaSerie.hasMany(db.personaje)
db.genero.hasMany(db.peliculaSerie)
db.personaje.hasMany(this.peliculaSerie)

module.exports = db;