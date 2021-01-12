const { user_agent } = require('casual')
const { queryBuilder } = require('../lib')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!
  
  // Get an instance of a user using findById(<YOUR_ID>)
  const ash = await User.query().findById('3e142852-a0be-4657-8827-73d1d01686d4')
  
  // Use that instance to create a new pet related that user
  const scooby = await ash.$relatedQuery('pets')
    .insert({ name: 'Scooby Doo', type: 'DOG'}).returning('*')
  console.log(scooby)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const graph = await ash.$fetchGraph('[pets, children]')
  console.log(graph)

  // -----
  cleanup()
}

run()
