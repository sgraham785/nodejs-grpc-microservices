import mongoose from 'mongoose'
import categorySchema from './schema'

export default mongoose.model('Category', categorySchema)
