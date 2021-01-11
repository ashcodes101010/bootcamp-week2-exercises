exports.up = async knex => knex.schema.createTable('friends', table => {
   
    table.uuid('requester').references('users.id')

    table.uuid('requested').references('users.id')

    table
        .enum('status', ['REQUESTED', 'DECLINED', 'ACCEPTED'])
        .notNullable()

    table.date('date_requested').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
