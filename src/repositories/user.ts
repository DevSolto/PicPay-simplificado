import { PrismaClient } from '@prisma/client'
import { CreateUserParams } from '../types'


const prisma = new PrismaClient()

export async function createUserRepository(createUserParams:CreateUserParams){
  const user = await prisma.user.create({ data: createUserParams })

  return user
}

export async function getUserByEmail(email:string) {
  const user = await prisma.user.findUnique({
    where:{
      email
    }
  })
  return user
}
export async function getUserByCpf(cpf:string) {
  const user = await prisma.user.findUnique({
    where:{
      cpf
    }
  })
  return user
}