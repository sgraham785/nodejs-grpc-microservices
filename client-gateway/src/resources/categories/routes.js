import express from 'express'
import categoriesClient from '../../clients/categories'

import promisize from '../../lib/promisize'

const createCategory = promisize(categoriesClient.createCategory, categoriesClient)
const listCategories = promisize(categoriesClient.listCategories, categoriesClient)
const getCategoryById = promisize(categoriesClient.getCategoryById, categoriesClient)
const updateCategory = promisize(categoriesClient.updateCategory, categoriesClient)
const deleteCategoryById = promisize(categoriesClient.deleteCategoryById, categoriesClient)

const client = express.Router()

client.post('/categories', async (req, res) => {
  try {
    return res.json(await createCategory(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/categories', async (req, res) => {
  try {
    return res.json(await listCategories(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.get('/categories/:id', async (req, res) => {
  try {
    return res.json(await getCategoryById(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

client.put('/categories', async (req, res) => {
  try {
    return res.json(await updateCategory(req.body))
  } catch (err) {
    console.log(err)
  }
})

client.delete('/categories/:id', async (req, res) => {
  try {
    return res.json(await deleteCategoryById(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

export default client
