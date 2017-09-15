import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

// import schema from './graphql'
import itemRoutes from './resources/items/routes'
import categoryRoutes from './resources/categories/routes'

const app = express()

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())

app.use('/v0', itemRoutes)
app.use('/v0', categoryRoutes)

// ======== *** DEVELOPMENT ONLY ROUTES ***
if (process.env.NODE_ENV !== 'production') {
  // Swagger API docs
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(require('./lib/swagger').swaggerSpec)
  })
  /**
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))
   */
}
/**
app.use('/graphql', graphqlExpress({
  schema
}))
 */
app.listen(3000, () => {
  console.log('Client Gateway is listening on port 3000!')
})
