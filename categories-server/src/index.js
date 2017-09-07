import { dbClient } from './db/client'
import injectClients from './server'

async function startServer () {
  try {
    const dbConn = await dbClient({ dbUrl: process.env.DB_URL })

    injectClients({ dbConn })
  } catch (err) {
    console.log('Error Starting Server', err)
  }
}

startServer()
