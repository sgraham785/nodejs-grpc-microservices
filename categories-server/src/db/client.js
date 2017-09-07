import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export const dbClient = async ({ dbUrl } = {}) => {
  return mongoose.connect(dbUrl, {
    useMongoClient: true
  })
}
