import path from 'path'
import grpc from 'grpc'
import Services from './service'
import { dbClient } from './db/client'

(async () => {
  try {
    const grpcServer = new grpc.Server()
    const PROTO_PATH = path.resolve(__dirname, '../protos/items/srvc.proto')
    const dbConn = await dbClient({ dbUrl: process.env.DB_URL })
    const Proto = await grpc.load(PROTO_PATH).items.srvc

    process.once('SIGINT', () => {
      dbConn.close()
    })

    await grpcServer.addService(
      Proto.Items.service,
      Services
    )

    await grpcServer.bind(
      '0.0.0.0:50051',
      grpc.ServerCredentials.createInsecure()
    )

    grpcServer.start()

    console.log('Items grpc server ready')
  } catch (err) {
    console.log('Error Starting Server', err)
  }
})()
