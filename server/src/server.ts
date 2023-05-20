import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memorieRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memorieRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running on http://localhost:3333')
  })
