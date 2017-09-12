import fs from 'fs'
import path from 'path'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../dist/model'

const filtersFile = JSON.parse(fs.readFileSync(path.join(__dirname, 'filters.json'), 'utf8'))

class FiltersSeeder extends Seeder {
  async beforeRun () {
    this.filterData = await this._generateItems()
  }

  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    console.log(JSON.stringify(this.filterData))
    return Model.create(this.filterData)
  }

  _generateItems () {
    return filtersFile.map((filter) => {
      // console.log(item)
      return filter
    })
  }
}

export default FiltersSeeder
