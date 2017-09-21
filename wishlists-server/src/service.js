import Wishlist from './model'

const WishlistServices = {
  createWishlist (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Wishlist.create({ name: params.name, users_id: params.users_id, items_id: params.items_id }, (err, data) => {
        if (err) return new Error('createWishlist error', err)
        let docs = {'data': [ data.toJSON() ]}
        cb(null, docs)
      })
    } catch (err) {
      console.log('createWishlist error', err)
      cb(new Error('createWishlist error', err))
    }
  },

  listWishlists (call, cb) {
    try {
      Wishlist.find({ })
        .exec((err, data) => {
          if (err) return new Error('listWishlists error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('listWishlists error', err)
      cb(new Error('listWishlists error', err))
    }
  },

  getWishlistById (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Wishlist.find({ _id: params._id })
        .exec((err, data) => {
          if (err) return new Error('getWishlistById error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('getWishlistById error', err)
      cb(new Error('getWishlistById error', err))
    }
  },

  getWishlistsByUsersId (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Wishlist.find({ users_id: params.users_id })
        .exec((err, data) => {
          if (err) return new Error('getWishlistsByUsersId error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('getWishlistsByUsersId error', err)
      cb(new Error('getWishlistsByUsersId error', err))
    }
  },

  updateWishlistNameById (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Wishlist.findOneAndUpdate({ _id: params._id }, { $set: { name: params.name } }, { new: true, runValidators: true }, (err, data) => {
        if (err) return new Error('updateWishlist error', err)
        let docs = { 'data': [ data.toJSON() ] }
        cb(null, docs)
      })
    } catch (err) {
      console.log('updateWishlist error', err)
      cb(new Error('updateWishlist error', err))
    }
  },

  addItemToWishlist (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Wishlist.findOneAndUpdate({ _id: params._id }, { $push: { items_id: params.items_id } }, { new: true, runValidators: true }, (err, data) => {
        if (err) return new Error('addItemToWishlist error', err)
        let docs = { 'data': [ data.toJSON() ] }
        cb(null, docs)
      })
    } catch (err) {
      console.log('addItemToWishlist error', err)
      cb(new Error('addItemToWishlist error', err))
    }
  },

  removeItemFromWishlist (call, cb) {
    const params = call.request
    console.log('REQUEST hsh PARAMS: ', params)
    try {
      Wishlist.findOneAndUpdate({ _id: params._id }, { $pull: { items_id: params.items_id } }, { new: true, runValidators: true }, (err, data) => {
        if (err) return new Error('removeItemFromWishlist error', err)
        let docs = { 'data': [data.toJSON()] }
        cb(null, docs)
      })
    } catch (err) {
      console.log('removeItemFromWishlist error', err)
      cb(new Error('removeItemFromWishlist error', err))
    }
  },

  deleteWishlistById (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    try {
      Wishlist.findOneAndRemove({ _id: params._id }, { passRawResult: true }, (err, data) => {
        if (err) return new Error('deleteWishlist error', err)
        let docs = { 'data': [ data.toJSON() ] }
        cb(null, docs)
      })
    } catch (err) {
      console.log('deleteWishlist error', err)
      cb(new Error('deleteWishlist error', err))
    }
  }
}

export default WishlistServices
