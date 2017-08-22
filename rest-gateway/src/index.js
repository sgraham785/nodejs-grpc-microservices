import cors from 'cors'
import express from 'express'
// import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'

// import schema from './graphql'
import routes from './routes'
import { swaggerSpec } from './middleware/swagger'

const app = express()

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())

app.use('/v0', routes)

// ======== *** DEVELOPMENT ONLY ROUTES ***
if (process.env.NODE_ENV === 'development') {
  // Swagger API docs
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

/**
 * app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
 */

app.listen(3000, () => {
  console.log('REST Service listening on port 3000!')
})
