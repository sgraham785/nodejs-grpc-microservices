import Item from './model'

const ItemService = {
  getItems (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    let sort = params.sort.replace(/,/g, ' ')
    try {
      Item.find({ })
        .select('name price images')
        .limit(params.limit)
        .sort(sort)
        .skip(params.limit * params.page)
        .exec((err, data) => {
          if (err) return new Error('getItems error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          // console.log(docs)
          cb(null, docs)
        })
    } catch (err) {
      console.log('getItems error', err)
      cb(new Error('getItems error', err))
    }
  },

  getItemByItemId (call, cb) {
    const params = call.request
    try {
      Item.find({ _id: params._id })
        .limit()
        .exec((err, data) => {
          if (err) return new Error('getItems error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('getItems error', err)
      cb(new Error('getItems error', err))
    }
  },

  getItemsSearch (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    let criteria
    if (params.q.length > 3) {
      // criteria = `'\"'${params.q.split(' ').join('\" \"')}'\"'`
      criteria = params.q.replace(/,/g, ' ')
    } else { criteria = '' }
    let sort = params.sort.replace(/,/g, ' ')
    try {
      Item.find({ $text: { $search: criteria, $caseSensitive: false } })
        .select('name price images')
        .limit(params.limit)
        .sort(sort)
        .skip(params.limit * params.page)
        .exec((err, data) => {
          if (err) return new Error('getItemsSearch error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          // console.log(docs)
          cb(null, docs)
        })
    } catch (err) {
      console.log('getItemsSearch error', err)
      cb(new Error('getItemsSearch error', err))
    }
  }
}

export default ItemService
