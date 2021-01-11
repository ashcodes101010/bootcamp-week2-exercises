const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  first_name: casual.first_name,
  last_name: casual.last_name,
  password: casual.password,
  bio: casual.short_description,
  bday: casual.date(format = 'YYYY-MM-DD'),
  location: casual.country,
  college: casual.title,
  work: casual.company_name,
  date_joined: casual.moment,
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
