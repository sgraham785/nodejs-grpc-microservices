import cors from 'cors'
import express from 'express'
// import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'

// import schema from './graphql'
import routes from './routes'

const app = express()

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())

app.use('/api', routes)

/**
 * app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
 */

app.listen(3000, () => {
  console.log('REST Service listening on port 3000!')
})