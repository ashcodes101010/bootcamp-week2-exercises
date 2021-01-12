const { user_agent } = require('casual')
const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const Ash = await User.query().insert(
    { 
      firstName: 'Ashleigh', 
      lastName: 'Coltman', 
      age: 18, 
      email: 'ash@example.com' 
    }
  ).returning('*')

  const me = await User.query().where('email', 'ash@example.com').first()

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const Bucky = await Pet.query().insert({
    ownerId: `${me.id}`,
    type: 'DOG',
    name: 'Bucky',
  }).returning('*')

  console.log(Ash, Bucky)

  // -----
  cleanup()
}

run()
