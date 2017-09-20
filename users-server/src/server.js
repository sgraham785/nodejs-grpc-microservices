import path from 'path'
import grpc from 'grpc'
import UserService from './service'

const PROTO_PATH = path.resolve(__dirname, '../protos/Users/srvc.proto')

const server = new grpc.Server()
const UserProto = grpc.load(PROTO_PATH).users.srvc

function injectClients ({ dbConn }) {
  process.once('SIGINT', () => {
    dbConn.close()
  })

  server.addService(
    UserProto.Users.service,
    UserService
  )

  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())

  console.log('Users grpc server ready')

  server.start()
}

export default injectClients
