import Chance from 'chance'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../model'

const chance = new Chance()

const CATS = ['category1', 'category2', 'category3']
const CATS2 = ['category1', 'category2', 'category3', '']
const MARKETS = ['Education', 'Healthcare', 'Workplace', 'Lab']
const CLASS = ['Modern', 'Traditional', 'Transitional', 'Mid-Century', 'Classic Modern', 'Retro', 'Vintage', 'Industrial']
const MATERIAL = ['Mesh', 'Faux', 'Leather', 'Fabric', 'Vinyl', 'Leather']
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

class ItemsSeeder extends Seeder {
  async beforeRun () {
    this.itemData = this._generateItems()
  }

  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    // console.log(JSON.stringify(this.itemData))
    return Model.create(this.itemData)
  }

  _generateItems () {
    return Array.apply(null, Array(200)).map(() => {
      const randomPrimaryImages = `${chance.url({
        domain: 'lorempixel.com', path: '190/255/abstract'
      })}/${chance.integer({ min: 1, max: 10 })}`
      const randomSecondaryImages = `${chance.url({
        domain: 'lorempixel.com', path: '190/255/transport'
      })}/${chance.integer({ min: 1, max: 10 })}`
      const randomAdditionalImages = IMG
      const randomCount = chance.integer({ min: 0, max: 5 })
      // console.log(chance.sentence({ words: 2 }))
      return {
        name: chance.sentence({ words: 2 }),
        vendor: chance.name({ nationality: 'en' }),
        sku: chance.google_analytics(),
        category: {
          primary: chance.pickone(CATS),
          secondary: chance.pickone(CATS2)
        },
        classification: chance.pickone(CLASS),
        market: chance.pickone(MARKETS),
        price: chance.dollar(),
        details: {
          materials: {
            primary: {
              code: chance.bb_pin(),
              description: chance.sentence(),
              type: chance.pickone(MATERIAL),
              chip: chance.avatar()
            },
            secondary: {
              code: chance.bb_pin(),
              description: chance.sentence(),
              type: chance.pickone(MATERIAL),
              chip: chance.avatar()
            }
          },
          colors: {
            primary: {
              code: chance.bb_pin(),
              description: chance.sentence(),
              type: chance.word(),
              pantone: chance.integer({ min: 100, max: 5999 }),
              rgb: chance.color({ format: 'rgb' }),
              hex: chance.color({ format: 'hex' }),
              chip: chance.avatar()
            },
            secondary: {
              code: chance.bb_pin(),
              description: chance.sentence(),
              type: chance.word(),
              pantone: chance.integer({ min: 100, max: 5999 }),
              rgb: chance.color({ format: 'rgb' }),
              hex: chance.color({ format: 'hex' }),
              chip: chance.avatar()
            }
          }
        },
        images: {
          primary: randomPrimaryImages,
          secondary: randomSecondaryImages,
          additional: chance.pickset(randomAdditionalImages, randomCount)
        },
        tags: chance.pickset(TAGS, randomCount)
      }
    })
  }
}

export default ItemsSeeder
