module.exports = (sequelize, dataTypes) => {
    let alias = 'usuarios';
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
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true 
    }
    const usuarios = sequelize.define(alias, cols, config);
    return usuarios;
}