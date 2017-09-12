import path from 'path'
import grpc from 'grpc'
import CategoriesService from './service'

const PROTO_PATH = path.resolve(__dirname, '../protos/categories/srvc.proto')

const server = new grpc.Server()
const CategoriesProto = grpc.load(PROTO_PATH).categories.srvc

function injectClients ({ dbConn }) {
  process.once('SIGINT', () => {
    dbConn.close()
  })

  server.addService(
    CategoriesProto.Categories.service,
    CategoriesService
  )

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())

  console.log('Categories grpc server ready')

  server.start()
}

export default injectClients
