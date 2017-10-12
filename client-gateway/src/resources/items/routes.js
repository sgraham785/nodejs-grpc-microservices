import express from 'express'
import itemsClient from '../../clients/items'

import promisize from '../../lib/promisize'

const createItem = promisize(itemsClient.createItem, itemsClient)
const listItems = promisize(itemsClient.listItems, itemsClient)
const getItemById = promisize(itemsClient.getItemById, itemsClient)
const searchItems = promisize(itemsClient.searchItems, itemsClient)

const client = express.Router()

client.post('/items', async (req, res) => {
  try {
    return res.json(await createItem(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items', async (req, res) => {
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 1
  let sort = req.query.sort || 'name'
  let filter = req.query.filter || {}
  console.log('filter--> ', filter)
  const request = { limit, page, sort, filter }
  console.log('request--> ', request)
  try {
    return res.json(await listItems(request))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items/search', async (req, res) => {
  let q = req.query.q || ''
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 1
  let sort = req.query.sort || 'name'
  const request = { q, limit, page, sort }

  try {
    return res.json(await searchItems(request))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items/:id', async (req, res) => {
  try {
    return res.json(await getItemById(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

export default client
