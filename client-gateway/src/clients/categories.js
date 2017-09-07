import grpc from 'grpc'
import path from 'path'

const PROTO_PATH = path.resolve(__dirname, '../../protos/categories/srvc.proto')
const NODE_NAME = process.env.NODE_NAME || 'categories-server'
const PORT = process.env.NODE_NAME ? '4143' : '50051'

const categoriesProto = grpc.load(PROTO_PATH).categories.srvc
const categoriesClient = new categoriesProto.Categories(`${NODE_NAME}:${PORT}`, grpc.credentials.createInsecure())

export default categoriesClient
