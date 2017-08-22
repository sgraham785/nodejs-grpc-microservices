import path from 'path'
import grpc from 'grpc'
import { dbClient } from './db/client'
import ItemService from './service'

const PROTO_PATH = path.resolve(__dirname, '../protos/items.proto')

const server = new grpc.Server()
const ItemProto = grpc.load(PROTO_PATH).items

function injectClients ({ dbConn }) {
  process.once('SIGINT', () => {
    dbConn.close()
  })

  server.addService(
    ItemProto.Items.service,
    ItemService
  )

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())

  console.log('Item grpc server ready')

  server.start()
}

const NODE_NAME = process.env.NODE_NAME
const DB_URL = NODE_NAME ? `mongodb://${NODE_NAME}:7474/workplacex` : 'mongodb://items-db/workplacex'

async function startServer () {
  try {
    const dbConn = await dbClient({ dbUrl: DB_URL })

    injectClients({ dbConn })
  } catch (err) {
    console.log('Error Starting Server', err)
  }
}

startServer()
