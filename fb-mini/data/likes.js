const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('like', ( userId, postId ) => ({
    user_id: userId,
    post_id: postId,
    date_liked: casual.moment,
}))

const likeData = []

for (let i = 0; i < 20; ++i) {
    const user = casual.random_element(userData).id 
    const post = casual.random_element(postData).id 
    likeData.push(casual.like(user, post))
}

module.exports = likeData