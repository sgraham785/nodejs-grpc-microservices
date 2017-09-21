import Chance from 'chance'

import { Seeder } from 'mongoose-data-seed'
import Model from '../../dist/model'

const chance = new Chance()

class UsersSeeder extends Seeder {
  async beforeRun () {
    this.userData = await this._generateUsers()
  }

  async shouldRun () {
    return Model.count().exec().then(count => count === 0)
  }

  async run () {
    // console.log(JSON.stringify(this.userData))
    return Model.create(this.userData)
  }

  _generateUsers () {
    return Array.apply(null, Array(25)).map(() => {
      return {
        first_name: chance.first({ nationality: 'en' }),
        last_name: chance.last({ nationality: 'en' }),
        email: chance.email(),
        password: chance.hash(),
        company: chance.company(),
        address: chance.address(),
        city: chance.city(),
        state: chance.state(),
        zipcode: chance.zip(),
        phone: chance.phone()
      }
    })
  }
}

export default UsersSeeder
