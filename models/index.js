const User = require('./User');
const Character = require('./Character');
const Monster = require('./Monster')

User.hasMany(Character, {
    foreignKey: 'user_id'
});
Character.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'set Null'
});

module.exports = { User, Character, Monster }

