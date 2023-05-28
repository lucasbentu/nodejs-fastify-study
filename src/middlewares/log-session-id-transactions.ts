import { FastifyReply, FastifyRequest } from 'fastify'

export async function logRequestSessionId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  console.log(`request_session_id: ${request.cookies.sessionId}`)
}
