import mongoose from 'mongoose'

const Schema = mongoose.Schema

const wishlistSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Wishlist name required']
  },
  users_id: String,
  items_id: [String]
}, {
  toJSON: {
    versionKey: false,
    transform: function (doc, ret) {
      ret = JSON.parse(JSON.stringify(ret))
      return ret
    }
  },
  runSettersOnQuery: true,
  timestamps: false
})

export default wishlistSchema
