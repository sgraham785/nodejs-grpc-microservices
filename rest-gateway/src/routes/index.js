import express from 'express'
import itemsClient from '../clients/items_client'

import promisize from '../lib/promisize'

const saveItem = promisize(itemsClient.saveItem, itemsClient)
const getItems = promisize(itemsClient.getItems, itemsClient)
const getItemByItemId = promisize(itemsClient.getItemByItemId, itemsClient)
const getItemsGrid = promisize(itemsClient.getItemsGrid, itemsClient)

const client = express.Router()

client.post('/items', async (req, res) => {
  try {
    return res.json(await saveItem(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items', async (req, res) => {
  let search = req.query.search || '{}'
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 0
  let sort = req.query.sort || 'name'
  let fields = req.query.fields || ''
  const request = { search, limit, page, sort, fields }
  try {
    return res.json(await getItems(request))
  } catch (err) {
    console.log(err)
  }
})

client.get('/items/grid', async (req, res) => {
  let search = req.query.search || '{}'
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 0
  let sort = req.query.sort || 'name'
  const request = { search, limit, page, sort }

  try {
    return res.json(await getItemsGrid(request))
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
