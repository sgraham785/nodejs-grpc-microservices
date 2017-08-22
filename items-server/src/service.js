import Item from './model'

const ItemService = {
  getItems (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    let search
    if (params.search !== '{}') {
      search = `{ $text: { $search: '${params.search}' } }`
    } else { search = params.search }

    let fields = params.fields.replace(/,/g, ' ')

    console.log(search)
    try {
      Item.find({ $text: { $search: params.search } })
        .select(fields)
        .limit(params.limit)
        .sort(params.sort)
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

  getItemsGrid (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', params)
    let search = params.search.replace(/,/g, ' ')
    try {
      Item.find({ $text: { $search: search } })
        .select('name price images')
        .limit(params.limit)
        .sort(params.sort)
        .skip(params.limit * params.page)
        .exec((err, data) => {
          if (err) return new Error('getItemsGrid error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          // console.log(docs)
          cb(null, docs)
        })
    } catch (err) {
      console.log('getItemsGrid error', err)
      cb(new Error('getItemsGrid error', err))
    }
  }
}

export default ItemService
