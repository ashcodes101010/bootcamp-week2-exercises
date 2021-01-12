const cleanup = require('../lib/cleanup')

// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  let allUsers = await User.query().where('firstName', 'Ivy')
  console.log(allUsers)

  // Do the same with object notation
  allUsers = await User.query().where({ firstName: 'Ivy' })
  console.log(allUsers)

   // Get all DOGS and BIRDS
  const allPets = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(allPets)
  
  // -----
  cleanup()
}

run()
