import {config} from 'dotenv'
config()

export const env = {
  mongoUrl: process.env.MONGO_URL || 'mongo://localhost:1227/marketplace',
  port: Number(process.env.PORT) || 3210,
  jwtSecret: process.env.JWT_SECRET || 'bananinhaQuandoCresceDa50Cacho$',
  bcryptRounds: Number(process.env.BCRYPT_ROUNDS) || 10
}
