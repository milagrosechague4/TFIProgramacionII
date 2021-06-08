module.exports = (sequelize, dataTypes) => {
    let alias = 'Rescatado';
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
        onderscore: true
    }
    const Rescatado = sequelize.define(alias, cols, config);
   
    //Rescatado.associate = (models)=>{
    //    Rescatado.belongsTo(models.Usuario, {
    //         as : 'usuarios',
    //         foreignKey: 'idUsuario' 
    //     })
    // }

    return Rescatado;
}