const { Sequelize, DataTypes } = requiere('sequelize')

const sequelize = new Sequelize('database', 'username', 'password' , {
    host: 'localhost',
    dialect : mariadb
})


export const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
        allownull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allownull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},{
    sequelize,
    modelName: 'Genero'
})
