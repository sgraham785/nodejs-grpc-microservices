import fs from 'fs'
import path from 'path'
import Chance from 'chance'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../model'

const chance = new Chance()

const categories = [
  'Seating',
  'Desks + Tables',
  'Storage',
  'Worktools',
  'Accessories'
]
const markets = [
  'Education',
  'Healthcare',
  'Workplace',
  'Lab'
]
const classifications = [
  'Modern',
  'Traditional',
  'Transitional',
  'Mid-Century',
  'Classic Modern',
  'Retro',
  'Vintage',
  'Industrial'
]
const materials = [
  'Mesh',
  'Faux',
  'Leather',
  'Fabric',
  'Vinyl',
  'Leather'
]
const IMG = [`${chance.url({
  domain: 'lorempixel.com', path: 'g/190/255/city'
})}`, `${chance.url({
  domain: 'lorempixel.com', path: 'g/190/255/nature'
})}`, `${chance.url({
  domain: 'lorempixel.com', path: 'g/190/255/transport'
})}`, `${chance.url({
  domain: 'lorempixel.com', path: 'g/190/255/fashion'
})}`, `${chance.url({
  domain: 'lorempixel.com', path: 'g/190/255/technics'
})}`]
const TAGS = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']

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
