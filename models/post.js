const Sequelize = require('sequelize');

module.exports = sequelize => {
    const Post = sequelize.define('post', {
        postId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: Sequelize.STRING
        },
        imageURL: {
            type: Sequelize.TEXT
        },
        title: {
            type: Sequelize.STRING,
        }
    });

    return Post;
};
