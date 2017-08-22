import grpc from 'grpc'
import path from 'path'

const PROTO_PATH = path.resolve(__dirname, '../../protos/items.proto')

const itemsProto = grpc.load(PROTO_PATH).items

const NODE_NAME = process.env.NODE_NAME || 'items-server'
const PORT = process.env.NODE_NAME ? '4143' : '50051'

const itemsClient = new itemsProto.Items(`${NODE_NAME}:${PORT}`, grpc.credentials.createInsecure())

export default itemsClient
