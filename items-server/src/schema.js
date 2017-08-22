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
  category: categorySchema,
  classification: String,
  market: String,
  price: String,
  details: detailSchema,
  images: imageSchema,
  tags: {
    type: [String],
    lowercase: true
    // required: [true, 'Must have at least one tag']
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

itemSchema.index({ classification: 1 })
itemSchema.index({ market: 1 })
itemSchema.index({
  name: 'text',
  vendor: 'text',
  tags: 'text'
}, {
  name: 'ItemsTextIndex'
})

export default itemSchema
