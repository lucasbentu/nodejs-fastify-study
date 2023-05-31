import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'
import { logRequestGlobal } from './middlewares/log-method-global'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', logRequestGlobal)

app.register(transactionsRoutes, { prefix: 'transactions' })
