const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    post_content: 'It is big part of making the big potato',
    user_id: 10
  },
  {
    title: 'Authentication vs. Authorization',
    post_content: 'Same thing to me who knows',
    user_id: 8
  },
  {
    title: 'Object-Relational Mapping',
    post_content: 'I also like mapping objects',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
