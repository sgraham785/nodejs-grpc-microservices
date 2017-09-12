import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
  vendor: {
    type: [String],
    unique: true,
    required: [true, 'Category name required']
  },
  category: [String],
  subcategory: [String],
  use: [String],
  market: [String],
  origin: [String]
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

export default categorySchema
