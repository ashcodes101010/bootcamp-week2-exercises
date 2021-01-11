exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('email').unique().notNullable()

  table.string('first_name').notNullable()

  table.string('last_name').notNullable()

  table.string('password').notNullable()

  table.string('bio').notNullable().defaultTo('Welcome to my Page!')

  table.date('bday')

  table.string('location')

  table.string('college')

  table.string('work')

  table.timestamp('date_joined').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
