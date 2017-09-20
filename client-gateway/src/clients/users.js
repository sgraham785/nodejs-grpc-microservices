import grpc from 'grpc'
import path from 'path'

const PROTO_PATH = path.resolve(__dirname, '../../protos/users/srvc.proto')
const NODE_NAME = process.env.NODE_NAME || 'users-server'
const PORT = process.env.NODE_NAME ? '4143' : '50051'

const usersProto = grpc.load(PROTO_PATH).users.srvc
const usersClient = new usersProto.Users(`${NODE_NAME}:${PORT}`, grpc.credentials.createInsecure())

export default usersClient
