import Chance from 'chance'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../model'

const chance = new Chance()

export const categories = [
  'Seating',
  'Desks + Tables',
  'Storage',
  'Worktools',
  'Accessories'
]

class ParentCategoriesSeeder extends Seeder {
  async beforeRun () {
    this.categoryData = this._generateItems()
  }

  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    // console.log(JSON.stringify(this.categoryData))
    return Model.create(this.categoryData)
  }

  _generateItems () {
    return categories.map(category => {
      return {
        name: category,
        slug: category.replace(/\s+/g, '-').toLowerCase(),
        parent_id: null
      }
    })
  }
}

export default ParentCategoriesSeeder
