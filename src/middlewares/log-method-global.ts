import { FastifyReply, FastifyRequest } from 'fastify'

export async function logRequestGlobal(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  console.log(`[${request.method}] - ${request.url}`)
}
