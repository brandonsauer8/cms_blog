const { User } = require('../models');

const userData = [{
        username: 'Brandon',
        password: 'sjslapshot22'

    },
    {
        username: 'Johnny',
        password: 'jlaw24'
    },
    {
        username: 'Sophia',
        password: 'jsophia245'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;