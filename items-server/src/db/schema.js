import mongoose from 'mongoose'

const Schema = mongoose.Schema

const categorySchema = new Schema({
  primary: {
    type: String,
    required: [true, 'Primary category required']
  },
  secondary: String
})

const materialFieldSchema = new Schema({
  code: String,
  description: String,
  type: String,
  chip: String
})

const colorFieldSchema = new Schema({
  code: String,
  description: String,
  type: String,
  pantone: Number,
  rgb: String,
  hex: String,
  chip: String
})

const materialSchema = new Schema({
  primary: materialFieldSchema,
  secondary: materialFieldSchema
})

const colorSchema = new Schema({
  primary: colorFieldSchema,
  secondary: colorFieldSchema
})

const detailSchema = new Schema({
  materials: materialSchema,
  colors: colorSchema
})

const imageSchema = new Schema({
  primary: {
    type: String,
    required: true
  },
  secondary: {
    type: String
  },
  additional: {
    type: [String]
  }
})

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Item name required'],
    unique: [true, 'Item name already exists']
  },
  vendor: {
    type: String,
    required: [true, 'Vendor name required']
  },
  sku: String,
  category: String,
  subcategory: String,
  use: {
    type: [String],
    lowercase: true
  },
  market: String,
  price: String,
  image: String,
  origin: String,
  tags: {
    type: [String],
    lowercase: true
  }
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

itemSchema.index({ category: 1 })
itemSchema.index({ subcategory: 1 })
itemSchema.index({ use: 1 })
itemSchema.index({ market: 1 })
itemSchema.index({
  name: 'text',
  vendor: 'text',
  tags: 'text'
}, {
  name: 'ItemsTextIndex'
})

export default itemSchema
