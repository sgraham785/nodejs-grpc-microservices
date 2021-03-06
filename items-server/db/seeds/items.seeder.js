import fs from 'fs'
import path from 'path'
import Chance from 'chance'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../dist/db/model'

const chance = new Chance()

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
      item.price = chance.dollar({ max: 999 })
      // console.log(item)
      return item
    })
  }
}

export default ItemsSeeder
