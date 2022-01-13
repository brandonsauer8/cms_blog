const { Post } = require('../models');

const postData = [{
        title: 'Coding!',
        content: 'Coding is helping me alot!',
        user_id: 1

    },
    {
        title: 'Cobra Kai',
        content: 'Such an amazing show!',
        user_id: 2
    },
    {
        title: 'Video Games',
        content: 'Help with handeye coordination',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;