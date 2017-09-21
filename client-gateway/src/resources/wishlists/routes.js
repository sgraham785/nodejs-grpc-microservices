import express from 'express'
import wishlistsClient from '../../clients/wishlists'

import promisize from '../../lib/promisize'

const createWishlist = promisize(wishlistsClient.createWishlist, wishlistsClient)
const listWishlists = promisize(wishlistsClient.listWishlists, wishlistsClient)
const getWishlistById = promisize(wishlistsClient.getWishlistById, wishlistsClient)
const getWishlistsByUsersId = promisize(wishlistsClient.getWishlistsByUsersId, wishlistsClient)
const updateWishlistNameById = promisize(wishlistsClient.updateWishlistNameById, wishlistsClient)
const deleteWishlistById = promisize(wishlistsClient.deleteWishlistById, wishlistsClient)
const addItemToWishlist = promisize(wishlistsClient.addItemToWishlist, wishlistsClient)
const removeItemFromWishlist = promisize(wishlistsClient.removeItemFromWishlist, wishlistsClient)

const client = express.Router()

client.post('/wishlists', async (req, res) => {
  try {
    return res.json(await createWishlist(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/wishlists', async (req, res) => {
  try {
    return res.json(await listWishlists(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/wishlists/:id', async (req, res) => {
  try {
    return res.json(await getWishlistById(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

client.get('/wishlists/user/:users_id', async (req, res) => {
  try {
    return res.json(await getWishlistsByUsersId(req.params.users_id))
  } catch (err) {
    console.log(err)
  }
})

client.put('/wishlists/:id', async (req, res) => {
  console.log('body', req.body)
  let payload = {
    _id: req.params.id,
    name: req.body.name
  }
  try {
    return res.json(await updateWishlistNameById(payload))
  } catch (err) {
    console.log(err)
  }
})

client.put('/wishlists/:id/add/:items_id', async (req, res) => {
  let payload = {
    _id: req.params.id,
    items_id: req.params.items_id
  }
  try {
    return res.json(await addItemToWishlist(payload))
  } catch (err) {
    console.log(err)
  }
})

client.put('/wishlists/:id/remove/:items_id', async (req, res) => {
  let payload = {
    _id: req.params.id,
    items_id: req.params.items_id
  }
  try {
    return res.json(await removeItemFromWishlist(payload))
  } catch (err) {
    console.log(err)
  }
})

client.delete('/wishlists/:id', async (req, res) => {
  try {
    return res.json(await deleteWishlistById(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

export default client
