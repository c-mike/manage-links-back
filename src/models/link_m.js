const {DataTypes, Model} = require('sequelize')

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
    modelName: 'Links',
    timestamps: false,
})

module.exports = { Link }
