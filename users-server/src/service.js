import User from './model'
// import removeEmptyObj from './utils/removeEmptyObj'

const UserService = {
  listUsers (call, cb) {
    const params = call.request
    console.log('REQUEST PARAMS: ', JSON.stringify(params))
    // const filter = removeEmptyObj(params.filter)
    let sort = params.sort.replace(/,/g, ' ')
    try {
      User.find(/* { $or: [ filter ] } */)
        // .select('first_name last_name email company')
        .limit(params.limit)
        .sort(sort)
        .skip(params.limit * params.page)
        .exec((err, data) => {
          if (err) return new Error('listUsers error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          // console.log(docs)
          cb(null, docs)
        })
    } catch (err) {
      console.log('listUsers error', err)
      cb(new Error('listUsers error', err))
    }
  },

  getUserById (call, cb) {
    const params = call.request
    try {
      User.find({ _id: params._id })
        .limit()
        .exec((err, data) => {
          if (err) return new Error('getUsers error', err)
          let docs = data.map((doc) => {
            return doc.toJSON()
          })
          cb(null, docs)
        })
    } catch (err) {
      console.log('getUsers error', err)
      cb(new Error('getUsers error', err))
    }
  }
}

export default UserService
