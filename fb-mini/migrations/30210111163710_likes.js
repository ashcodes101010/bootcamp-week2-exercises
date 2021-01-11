
exports.up = async knex => knex.schema.createTable('likes', table => {
        
    table.uuid('post_id').references('posts.id')
    
    table.uuid('user_id').references('users.id')

    table.timestamp('date_liked').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('likes')
