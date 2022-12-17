const User = require('../dataBase/User');
const { Promise } = require('mongoose');

module.exports = {
    find: async (query) => {
        const { limit = 10, page = 1, name } = query;

        let findObj = {};

        if (name) {
            findObj = {
                ...findObj,
                name: { $regex: name },
            };
        } // пошук user за ім'ям

        const [users, count] = await Promise.all([
            User.find(findObj).limit(limit).skip((+page - 1) * limit), // пагінація по сторінках
            User.count(findObj),
        ]);


        return {
            users,
            page: +page,
            count,
        };
    },
};
