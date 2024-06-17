import { PrismaClient } from "@prisma/client";
import { CreateTransactionParams } from "../types";


const prisma = new PrismaClient()

export async function createTransactionRepository(createTransactionParams: CreateTransactionParams) {
  const transaction = await prisma.transaction.create({
    data:createTransactionParams
  })
  return transaction
}