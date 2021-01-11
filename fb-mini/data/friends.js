const casual = require('casual')
const userData = require('./users')

casual.define('friend', ( user1Id, user2Id ) => ({
    requester: user1Id,
    requested: user2Id,
    status: casual.random_element(['REQUESTED', 'DECLINED', 'ACCEPTED']),
    date_requested: casual.moment,
}))


const friendData = []

for (let i = 0; i < 20; ++i) {
    const user1 = casual.random_element(userData).id
    const user2 = casual.random_element(userData).id
    friendData.push(casual.friend(user1, user2))
}

module.exports = friendData