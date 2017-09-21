import grpc from 'grpc'
import path from 'path'

const PROTO_PATH = path.resolve(__dirname, '../../protos/wishlists/srvc.proto')
const NODE_NAME = process.env.NODE_NAME || 'wishlists-server'
const PORT = process.env.NODE_NAME ? '4143' : '50051'

const wishlistsProto = grpc.load(PROTO_PATH).wishlists.srvc
const wishlistsClient = new wishlistsProto.Wishlists(`${NODE_NAME}:${PORT}`, grpc.credentials.createInsecure())

export default wishlistsClient
