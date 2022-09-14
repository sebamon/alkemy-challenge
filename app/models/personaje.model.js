const { NOW } = require('sequelize');
const { Sequelize, DataTypes } = require('sequilize')

// const sequelize = new Sequelize('mariadb:') //params

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: mysql
//     /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// })



export const Personaje = sequelize.define('Personaje', {
    image: {
        type: DataTypes.STRING,
        allownull : true
    },
    nombre: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER,
    }, 
    peso: {
        type: DataTypes.FLOAT
    },
    historia: {
        type: DataTypes.STRING
    },
    // peliculas: {
    //     type: DataTypes.STRING //cambiar por coleccion de peliculas.
    // },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DateTypes.NOW //ESTO FUNCIONA ?
    }
},{
    sequelize,
    modelName: 'Personaje'
})

