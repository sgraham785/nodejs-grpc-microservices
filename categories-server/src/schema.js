import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
  vendors: {
    type: [String],
    unique: true,
    required: [true, 'Category name required']
  },
  categories: [String],
  subcategories: [String],
  uses: [String],
  markets: [String],
  origins: [String]
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
