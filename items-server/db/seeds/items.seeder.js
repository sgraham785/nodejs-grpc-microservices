import fs from 'fs'
import path from 'path'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../dist/model'

const itemsFile = JSON.parse(fs.readFileSync(path.join(__dirname, 'items.json'), 'utf8'))

class ItemsSeeder extends Seeder {
  async beforeRun () {
    this.itemData = await this._generateItems()
  }

  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    // console.log(JSON.stringify(this.itemData))
    return Model.create(this.itemData)
  }

  _generateItems () {
    return itemsFile.map((item) => {
      // console.log(item)
      return item
    })
  }
}

export default ItemsSeeder
