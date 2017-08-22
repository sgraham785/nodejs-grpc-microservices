import mongoose from 'mongoose'
import itemSchema from './schema'

// mongoose.Promise = global.Promise
/*
itemSchema.statics = {

  list ({ criteria = {}, page = 0, limit = 30 }) {
    return this
      .find(criteria)
//      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(limit * page)
      .exec()
  }
}
*/
export default mongoose.model('Item', itemSchema)
