module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        imagen:{
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        
    }
    let config = {
        tableName: 'usuarios',
        timestamps: false 
    }
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Rescatado, {
            as : 'rescatados',
            foreignKey: 'usuarioId' 
        }),
        Usuario.hasMany(models.Comentario,{
            as: 'usuarios',
            foreignKey: 'usuarioId'
        })
    }

    return Usuario;
}