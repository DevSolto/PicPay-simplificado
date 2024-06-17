import { FastifyInstance } from "fastify";
import { createUserUseCase, depositUseCase } from "../usecases/user";
import { z } from 'zod';
import { cpf as cpfValidator } from 'cpf-cnpj-validator'
import { DepositBody, DepositRequestParams } from "../types";

export async function userController(app: FastifyInstance) {

  const userSchema = z.object({
    name: z.string({ message: "The name field is required" }),
    cpf: z.string({ message: "The CPF field is required" }).refine(cpfValidator.isValid, { message: "The field must be a valid CPF" }),
    email: z.string({ message: "The email field is required" }).email({ message: "The field must be a valid email" }),
    password: z.string({ message: "The password field is required" }).min(8, { message: "The password must be at least 8 characters long" }),
    isMerchant: z.boolean().optional(),
  });

  const depositSchema = z.object({
    userId: z.string({ message: "The userId fiel" }).uuid({ message: "The field must be a valid UUID" }),
    amount: z.number({ message: "The amount fiel" }).positive({ message: "The amount must be positive" })
  })

  app.post('/users', async (request, reply) => {
    try {
      const validatedData = userSchema.parse(request.body);
      const user = await createUserUseCase(validatedData);
      reply.status(200).send(user)
    } catch (error) {
      reply.status(400).send({
        message: error
      });
    }
  });

  app.post <{ Params: DepositRequestParams, Body: DepositBody }> ('/users/deposit/:userId', async (request, reply) => {
    try {
      const { userId } = request.params
      const body = request.body
      const validatedData = depositSchema.parse({
        ...body,
        userId

      })
      const user = await depositUseCase(validatedData)
      reply.status(200).send(user)
    } catch (error) {
      reply.status(400).send({
        message: error
      });
    }
  })
}
