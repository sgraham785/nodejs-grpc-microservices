import mongooseLib from 'mongoose'

import ItemsSeeder from './src/db/seeds/items.seeder'

mongooseLib.Promise = global.Promise

// Export the mongoose lib
export const mongoose = mongooseLib

// Export the mongodb url
export const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27018/workplacex'

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  ItemsSeeder
}
