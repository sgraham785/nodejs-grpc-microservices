import Item from './model'
import removeEmptyObj from './utils/removeEmptyObj'

const ItemService = {
  listItems (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', JSON.stringify(params))
    const filter = removeEmptyObj(params.filter)
    console.log('filter --> ', filter)
    let sort = params.sort.replace(/,/g, ' ')
    try {
      Item.find({ $or: [ filter ] })
        .select('name price image')
        .limit(params.limit)
        .sort(sort)
        .skip(params.limit * params.page)
        .exec((err, data) => {
          if (err) return new Error('listItems error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          // console.log(docs)
          cb(null, docs)
        })
    } catch (err) {
      console.log('listItems error', err)
      cb(new Error('listItems error', err))
    }
  },

  getItemById (call, cb) {
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

  searchItems (call, cb) {
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
        .select('name price image')
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
