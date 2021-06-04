module.exports = (sequelize, dataTypes) => {
    let alias = 'comentarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        usuarioId: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
        fechaCreacion: {
            type: dataTypes.DATE
        }
        productId: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'comentarios',
        timestamps: false,
        underscored: true 
    }
    const comentario = sequelize.define(alias, cols, config);
    comentario.associate = function(models){
        comentario.hasMany(models.usuarios,{
            as: 'usuarios',
            foreignKey: 'usuarioId'
        })
    }
    return comentarios;
}