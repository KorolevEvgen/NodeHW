const User = require('../dataBase/User');
const { userService } = require('./index');

module.exports = {
    findByParams: async (filter = {}) => {
        return User.find(filter);
    },
    findOneByParams: async (filter = {}) => {
        return User.findOne(filter);
    },
    create: async (userInfo) => {
        return User.create(userInfo)

    },
    updateOne: async (userId, newInfo) => {
        return User.findByIdAndUpdate(userId, newInfo,{new:true})

},
    deleteOne: async (userId) => {
        return userService.deleteOne({ _id: userId })

    },
};
