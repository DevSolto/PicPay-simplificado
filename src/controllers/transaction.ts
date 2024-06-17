import { FastifyInstance } from "fastify";
import { z } from "zod";
import { createTransactionUseCase } from "../usecases/transaction";

export async function transactionController(app: FastifyInstance) {
  const transactionSchema = z.object({
    value: z.number({ message: "The value field is required" }).positive({ message: "The value must be positive" }),
    payerId: z.string({ message: "The payerId fiel" }).uuid({ message: "The field must be a valid UUID" }),
    payeeId: z.string({ message: "The payeeId fiel" }).uuid({ message: "The field must be a valid UUID" })
  })

  app.post('/transactions', async (request, reply) => {
    try {
      const validatedData = transactionSchema.parse(request.body);
      const user = await createTransactionUseCase(validatedData);
      reply.status(200).send(user)
    } catch (error) {
      reply.status(400).send({
        message: error
      });
    }
  })
}