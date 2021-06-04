module.exports = (sequelize, dataTypes) => {
    let alias = 'rescatados';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        idUsuario: {
            type : dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        fechRescate : {
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
        onderscore: true
    }
    const rescatados = sequelize.define(alias, cols, config);
    rescatados.associate = function(models){
        rescatados.belongsTo(models.Genre, {
            as : 'usuarios',
            foreignKey: 'Idusuario' 
        })
    }

    return rescatados;
}