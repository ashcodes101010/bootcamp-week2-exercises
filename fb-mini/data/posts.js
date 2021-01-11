const casual = require('casual')
const userData = require('./users')

casual.define('post', ( userId ) => ({
    id: casual.uuid,
    user_id: userId,
    text: casual.short_description,
    likes: casual.integer(from = 10, to = 2000),
    date_posted: casual.moment,
}))

const postData = []

for (let i = 0; i < 20; ++i) {
    const user = casual.random_element(userData).id 
    postData.push(casual.post(user))
}

module.exports = postData