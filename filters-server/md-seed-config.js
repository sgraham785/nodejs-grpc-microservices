import mongooseLib from 'mongoose'

import FiltersSeeder from './db/seeds/filters.seeder'

mongooseLib.Promise = global.Promise

// Export the mongoose lib
export const mongoose = mongooseLib

// Export the mongodb url
export const mongoURL = process.env.DB_URL || 'mongodb://localhost:27017/workplacex'

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  FiltersSeeder
}
