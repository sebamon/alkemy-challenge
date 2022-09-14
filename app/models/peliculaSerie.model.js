const { Sequelize, DataTypes } = requiere('sequelize')

export const PeliculaSerie = sequelize.define('PeliculaSerie', {
    imagen: {
        type: DataTypes.STRING,
        allownull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allownull: false
    },
    fechaCreacion: {
        type: DataTypes.DATE,
    },
    calificacion: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'PeliculaSerie'
})