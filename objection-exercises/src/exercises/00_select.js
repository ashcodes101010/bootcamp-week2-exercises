const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = (async () => {
  // Write Queries and Logs Here !!!
  
  // Get the name and age of all users
  const allUsers = await User.query().select('firstName', 'lastName', 'age')
  console.log(allUsers)
  
  // Get all pets
  const allPets = await Pet.query()
  console.log(allPets)

  // ------
  cleanup()
})

run()
