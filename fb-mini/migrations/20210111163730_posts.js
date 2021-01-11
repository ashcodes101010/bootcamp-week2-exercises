
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
        
    table.uuid('user_id').references('users.id')

    table.string('text').notNullable()

    table.integer('likes').defaultTo(0)

    table.timestamp('date_posted').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
