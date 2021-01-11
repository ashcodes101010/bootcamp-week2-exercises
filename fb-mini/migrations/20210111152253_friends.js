exports.up = async knex => knex.schema.createTable('friends', table => {
    
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
