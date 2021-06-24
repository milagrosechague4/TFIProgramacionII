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
        productId: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        
    }
    let config = {
        tableName: 'comentarios',
        timestamps: true,
    }
    const Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario,{
            as: 'usuario',
            foreignKey: 'usuarioId'
        }),
        Comentario.belongsTo(models.Rescatado,{
            as: 'comentario',
            foreignKey: 'productId'
        })
    }
    return Comentario;
}