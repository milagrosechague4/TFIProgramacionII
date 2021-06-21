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
    }
    const Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario,{
            as: 'usuarios',
            foreignKey: 'usuarioId'
        }),
        Comentario.belongsTo(models.Rescatado,{
            as: 'comentarios',
            foreignKey: 'productId'
        })
    }
    return Comentario;
}