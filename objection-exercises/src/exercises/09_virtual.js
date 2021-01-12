const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const user = await User.query().first()
  console.log(user.fullName, user.isOver30)

  const pet = await Pet.query().first()
  console.log(pet.isDog, pet.desc)

  // -----
  cleanup()
}

run()
