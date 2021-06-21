module.exports = (sequelize, dataTypes) => {
    let alias = 'Rescatado';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        usuarioId: {
            type : dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        fechaRescate : {
            type: dataTypes.DATE
        },
        clase: {
            type: dataTypes.TINYINT
        },
        descripcion: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName : 'rescatados',
        timestamps: false,
    }
    const Rescatado = sequelize.define(alias, cols, config);
   
    Rescatado.associate = function(models){
        Rescatado.belongsTo(models.Usuario, {
            as : 'rescatado',
            foreignKey: 'usuarioId' 
        }),
        Rescatado.hasMany(models.Comentario,{
            as: 'comentarios',
            foreignKey: 'productId'
        })
    }


    return Rescatado;
}