import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memorieRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(memorieRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running on http://localhost:3333')
  })
