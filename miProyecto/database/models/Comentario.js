module.exports = (sequelize, dataTypes) => {
    let alias = 'Comentario';
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
        },
        productId: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'comentarios',
        timestamps: false,
        underscored: true 
    }
    const Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function(models){
        Comentario.hasMany(models.usuarios,{
            as: 'usuarios',
            foreignKey: 'usuarioId'
        })
    }
    return Comentario;
}