import path from 'path'
import grpc from 'grpc'
import WishlistServices from './service'

const PROTO_PATH = path.resolve(__dirname, '../protos/wishlists/srvc.proto')

const server = new grpc.Server()
const WishlistsProto = grpc.load(PROTO_PATH).wishlists.srvc

function injectClients ({ dbConn }) {
  process.once('SIGINT', () => {
    dbConn.close()
  })

  server.addService(
    WishlistsProto.Wishlists.service,
    WishlistServices
  )

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())

  console.log('Wishlists grpc server ready')

  server.start()
}

export default injectClients
