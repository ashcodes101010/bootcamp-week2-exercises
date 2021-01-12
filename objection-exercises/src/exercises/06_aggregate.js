const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const userCount = await User.query().resultSize()
  console.log(userCount)

  // Get the average age of users
  const avgAge = await User.query().avg('age as avgAge').first()
  console.log(avgAge.avgAge)

  // Get the total number of dogs
  const dogCount = await Pet.query().where('type', 'DOG').resultSize()
  console.log(dogCount)

  // -----
  cleanup()
}

run()
