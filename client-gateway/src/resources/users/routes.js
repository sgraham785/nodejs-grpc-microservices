import express from 'express'
import usersClient from '../../clients/users'

import promisize from '../../lib/promisize'

// const createUser = promisize(usersClient.createUser, usersClient)
const listUsers = promisize(usersClient.listUsers, usersClient)
const getUserById = promisize(usersClient.getUserById, usersClient)
// const searchusers = promisize(usersClient.searchusers, usersClient)

const client = express.Router()

/**
client.post('/users', async (req, res) => {
  try {
    return res.json(await createUser(req.body))
  } catch (err) {
    console.log(err)
  }
})
*/

client.get('/users', async (req, res) => {
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 0
  let sort = req.query.sort || 'name'
  let filter = req.query.filter || {}
  console.log('filter--> ', filter)
  const request = { limit, page, sort, filter }
  console.log('request--> ', request)
  try {
    return res.json(await listUsers(request))
  } catch (err) {
    console.log(err)
  }
})

/**
client.get('/users/search', async (req, res) => {
  let q = req.query.q || ''
  let limit = parseInt(req.query.limit) || 10
  let page = parseInt(req.query.page) || 0
  let sort = req.query.sort || 'name'
  const request = { q, limit, page, sort }

  try {
    return res.json(await searchusers(request))
  } catch (err) {
    console.log(err)
  }
})
*/

client.get('/users/:id', async (req, res) => {
  try {
    return res.json(await getUserById(req.params.id))
  } catch (err) {
    console.log(err)
  }
})

export default client
