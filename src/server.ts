import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import { logRequestGlobal } from './middlewares/log-method-global'

const app = fastify()
app.register(cookie)
app.addHook('preHandler', logRequestGlobal)
app.register(transactionsRoutes, { prefix: 'transactions' })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
