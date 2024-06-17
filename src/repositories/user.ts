import { PrismaClient } from '@prisma/client'
import { CreateUserParams, UpdateUserParams } from '../types'


const prisma = new PrismaClient()

export async function createUserRepository(createUserParams:CreateUserParams){
  const user = await prisma.user.create({ data: createUserParams })

  return user
}
export async function getUserByIdRepository(id:string) {
  const user = await prisma.user.findUnique({
    where:{
      id
    }
  })
  return user
}
export async function getUserByEmailRepository(email:string) {
  const user = await prisma.user.findUnique({
    where:{
      email
    }
  })
  return user
}
export async function getUserByCpfRepository(cpf:string) {
  const user = await prisma.user.findUnique({
    where:{
      cpf
    }
  })
  return user
}
export async function updateUserRepository(id:string, updateUserParams:UpdateUserParams){
  const user = await prisma.user.update({
    where:{
      id
    },
    data:updateUserParams
  })
  return user
}