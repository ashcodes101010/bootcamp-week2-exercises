const { BelongsToOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get virtualAttributes() {
        return ['isDog', 'desc']
    }

    get isDog() {
        return this.type === 'DOG'
    }

    get desc() {
        return `${this.name} is a ${this.type.toLowerCase()}.`
    }

    static get tableName() {
        return 'pets'
    } 

    static get relationMappings() {
        const User = require('./User')
        return {
            users: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'pets.ownerId',
                    to: 'users.id'
                },
            },
        }
    }
}

module.exports = Pet