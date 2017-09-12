import Category from './model'

const CategoriesService = {
  createCategory (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Category.create({ name: params.name }, (err, data) => {
        if (err) return new Error('createCategory error', err)
        let docs = {'data': [ data.toJSON() ]}
        cb(null, docs)
      })
    } catch (err) {
      console.log('createCategory error', err)
      cb(new Error('createCategory error', err))
    }
  },

  listCategories (call, cb) {
    try {
      Category.find({ })
        .exec((err, data) => {
          if (err) return new Error('listCategories error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('listCategories error', err)
      cb(new Error('listCategories error', err))
    }
  },

  getCategoryById (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Category.find({ _id: params._id })
        .exec((err, data) => {
          if (err) return new Error('getCategoryById error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('getCategoryById error', err)
      cb(new Error('getCategoryById error', err))
    }
  },

  updateCategory (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Category.findOneAndUpdate({ _id: params._id }, { $set: { name: params.name } }, { new: true, runValidators: true }, (err, data) => {
        if (err) return new Error('updateCategory error', err)
        let docs = { 'data': [ data.toJSON() ] }
        cb(null, docs)
      })
    } catch (err) {
      console.log('updateCategory error', err)
      cb(new Error('updateCategory error', err))
    }
  },

  deleteCategoryById (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Category.findOneAndRemove({ _id: params._id }, { passRawResult: true }, (err, data) => {
        if (err) return new Error('deleteCategory error', err)
        let docs = { 'data': [ data.toJSON() ] }
        cb(null, docs)
      })
    } catch (err) {
      console.log('deleteCategory error', err)
      cb(new Error('deleteCategory error', err))
    }
  }
}

export default CategoriesService
