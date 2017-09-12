import { Seeder } from 'mongoose-data-seed'
import Model from '../../model'

const parentCategories = [
  'Seating',
  'Desks + Tables',
  'Storage',
  'Worktools',
  'Accessories'
]
const seatingCategories = [
  'Lounge Seating',
  'Task Chairs',
  'Guest Chairs',
  'Office Chairs'
]

class PrimaryCategoriesSeeder extends Seeder {
  async beforeRun () {
    this.seating_id = await Model.findOne({ 'name': 'Seating' }).exec()
    this.desk_id = await Model.findOne({ 'name': 'Desks + Tables' }).exec()
    this.storage_id = await Model.findOne({ 'name': 'Storage' }).exec()
    this.worktools_id = await Model.findOne({ 'name': 'Worktools' }).exec()
    this.Accessories_id = await Model.findOne({ 'name': 'Accessories' }).exec()
  }

  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    // console.log(JSON.stringify(this.categoryData))
    return Model.create(this._generateSeatingCategories)
  }

  _generateSeatingCategories () {
    return seatingCategories.map(category => {
      return {
        name: category,
        slug: category.replace(/\s+/g, '-').toLowerCase(),
        parent_id: this.seating_id._id
      }
    })
  }
}

export default PrimaryCategoriesSeeder
