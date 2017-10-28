import async from 'async'
import Item from '../db/model'
import removeEmptyObj from '../utils/removeEmptyObj'

const ItemService = {
  listItems (call, cb) {
    const params = call.request
    const filter = removeEmptyObj(params.filter)
    let sort = params.sort.replace(/,/g, ' ')
    let offset = (params.page - 1) * params.limit
    /**
    let query
    if ('use' in filter) {
      query = (Array.isArray(filter.use) === true) ? { 'use': { $all: filter.use.map(i => { return i }) } } : { $or: [filter] }
    }
    console.log('query --> ', query)
    */
    try {
      const findDocs = (callback) => {
        Item.find({ $or: [filter] })
          // .select('name price image')
          .limit(params.limit)
          .sort(sort)
          .skip(offset)
          .exec((err, data) => {
            if (err) return new Error('listItems findDocs error', err)
            const docs = data.map((doc) => {
              return doc.toJSON()
            })
            callback(null, docs)
          })
      }
      const countDocs = (callback) => {
        Item.count({ $or: [filter] })
          .exec((err, data) => {
            if (err) return new Error('listItems countDocs error', err)
            callback(null, data)
          })
      }

      async.parallel([findDocs, countDocs], (err, results) => {
        if (err) return new Error('listItems parallel error', err)

        let data = results[0]
        let count = results[1]

        let meta = {
          count,
          offset,
          limit: params.limit,
          page: params.page,
          pages: Math.ceil(count / params.limit) || 1
        }

        let result = Object.assign({data}, {meta})

        cb(null, result)
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
    let criteria
    if (params.q.length > 3) {
      // criteria = `'\"'${params.q.split(' ').join('\" \"')}'\"'`
      criteria = params.q.replace(/,/g, ' ')
    } else { criteria = '' }
    let sort = params.sort.replace(/,/g, ' ')
    let offset = (params.page - 1) * params.limit
    try {
      const findDocs = (callback) => {
        Item.find({ $text: { $search: criteria, $caseSensitive: false } })
          // .select('name price image')
          .limit(params.limit)
          .sort(sort)
          .skip(offset)
          .exec((err, data) => {
            if (err) return new Error('getItemsSearch findDocs error', err)
            let docs = data.map((doc) => {
              return doc.toJSON()
            })
            callback(null, docs)
          })
      }
      const countDocs = (callback) => {
        Item.count({ $text: { $search: criteria, $caseSensitive: false } })
          .exec((err, data) => {
            if (err) return new Error('getItemsSearch countDocs error', err)
            callback(null, data)
          })
      }

      async.parallel([findDocs, countDocs], (err, results) => {
        if (err) return new Error('getItemsSearch parallel error', err)

        let data = results[0]
        let count = results[1]

        let meta = {
          count,
          offset,
          limit: params.limit,
          page: params.page,
          pages: Math.ceil(count / params.limit) || 1
        }

        let result = Object.assign({ data }, { meta })

        cb(null, result)
      })
    } catch (err) {
      console.log('getItemsSearch error', err)
      cb(new Error('getItemsSearch error', err))
    }
  }
}

export default ItemService
