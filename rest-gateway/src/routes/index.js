import express from 'express'
import itemsClient from '../clients/items_client'

import promisize from '../lib/promisize'

const saveItem = promisize(itemsClient.saveItem, itemsClient)
const getItems = promisize(itemsClient.getItems, itemsClient)
const getItemByItemId = promisize(itemsClient.getItemByItemId, itemsClient)
const getItemsSearch = promisize(itemsClient.getItemsSearch, itemsClient)

const client = express.Router()

client.post('/items', async (req, res) => {
  try {
    return res.json(await saveItem(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items', async (req, res) => {
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 0
  let sort = req.query.sort || 'name'
  // let fields = req.query.fields || ''
  const request = { limit, page, sort }
  try {
    return res.json(await getItems(request))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items/search', async (req, res) => {
  let q = req.query.q || ''
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 0
  let sort = req.query.sort || 'name'
  const request = { q, limit, page, sort }

  try {
    return res.json(await getItemsSearch(request))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items/:id', async (req, res) => {
  try {
    return res.json(await getItemByItemId(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

export default client
