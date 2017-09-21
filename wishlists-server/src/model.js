import mongoose from 'mongoose'
import wishlistSchema from './schema'

export default mongoose.model('Wishlist', wishlistSchema)
