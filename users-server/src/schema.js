import mongoose from 'mongoose'

const Schema = mongoose.Schema

const validateEmail = (email) => {
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return re.test(email)
}

const userSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'First name required'],
    unique: [true, 'First name already exists']
  },
  last_name: {
    type: String,
    required: [true, 'Last name required']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please use a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: 'Email address is required'
  },
  company: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  phone: String
}, {
  toJSON: {
    versionKey: false,
    transform: function (doc, ret) {
      ret = JSON.parse(JSON.stringify(ret))
      return ret
    }
  },
  runSettersOnQuery: true,
  timestamps: false
})

userSchema.index({ email: 1 })

export default userSchema
