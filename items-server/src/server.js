import path from 'path'
import grpc from 'grpc'
import ItemService from './service'

const PROTO_PATH = path.resolve(__dirname, '../protos/items/srvc.proto')

const server = new grpc.Server()
const ItemProto = grpc.load(PROTO_PATH).items.srvc

function injectClients ({ dbConn }) {
  process.once('SIGINT', () => {
    dbConn.close()
  })

  server.addService(
    ItemProto.Items.service,
    ItemService
  )

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())

  console.log('Items grpc server ready')

  server.start()
}

export default injectClients
