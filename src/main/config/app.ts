import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {setupRoutes} from './routes'
export const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
setupRoutes(app)
