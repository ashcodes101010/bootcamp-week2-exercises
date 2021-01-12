const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  let allUsers = await User.query().withGraphFetched('pets')
  console.log(allUsers)

  // Get all users, their pets, AND their children
  allUsers = await User.query().withGraphFetched('[pets, children]')
  console.log(allUsers)

  // Get all users, their parents, and their grandparents
  allUsers = await User.query().withGraphFetched('parents.^2')
  console.log(allUsers[0].parents[0].parents)

  // Get all users, their pets, their chilren, and their childrens' pets
  allUsers = await User.query().withGraphFetched('[pets, children.[pets]]')
  console.log(allUsers[2].children[1].pets)

  // -----
  cleanup()
}

run()
