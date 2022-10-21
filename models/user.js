const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      dropDups: true
    },
    passphrase: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ['root', 'base'],
      required: true,
      default: 'base'
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObjects: {
      virtuals: true
    }
  }
)

UserSchema.plugin(mongoosePaginate)

const UserModel = mongoose.model('User', UserSchema)

module.exports = {
  model: UserModel,
  schema: UserSchema
}
