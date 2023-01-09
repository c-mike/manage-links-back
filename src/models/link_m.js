const {DataTypes, Model} = require('sequelize')
const db = require('../config/db')

class Link extends Model {}
Link.init ({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{ type: DataTypes.TEXT },
    url:{ 
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize :db,
    modelName: 'Links',
    timestamps: false,
})

module.exports = Link
