const cleanup = require('../lib/cleanup')

// Import models
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  const trans = await User.transaction( async trx => {
    const sasha = await User.query(trx)
      .insert(
        { 
          firstName: 'Sasha', 
          lastName: 'Brauss', 
          age: '19', 
          email: 'hello@gmail.com' 
        }).returning('*')

    await sasha.$relatedQuery('pets', trx)
      .insert({ name: 'Connie', type: 'BIRD' }) 

    const birdNum = await Pet.query(trx)
      .where('type', 'BIRD')
      .resultSize()

    if (birdNum > 15) {
      await Pet.query().delete().where('type', 'BIRD')
    }
  })

  // -----
  cleanup()
}

run()
