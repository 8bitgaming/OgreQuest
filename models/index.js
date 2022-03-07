const User = require('./User');
const Characters = require('./Characters');

User.hasMany(Characters, {
    foreignKey: 'user_id'
});
Characters.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'set Null'
});



module.exports = { User, Characters }