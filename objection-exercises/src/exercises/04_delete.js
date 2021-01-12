const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  await Pet.query().delete().where('type', 'CAT')

  const allPets = await Pet.query()
  console.log(allPets)

  // -----
  cleanup()
}

run()
