import { CpfInUseError, EmailInUseError, UserNotFound } from "../errors/user";
import { createUserRepository, getUserByIdRepository, getUserByEmailRepository, getUserByCpfRepository, updateUserRepository, } from "../repositories/user";
import { CreateUserParams, DepositParams } from "../types";

export async function createUserUseCase(createUserParams: CreateUserParams) {
  
  const emailIsUsed = await getUserByEmailRepository(createUserParams.email)
  if (emailIsUsed) {
    throw new EmailInUseError()
  }
  const cpfIsUsed = await getUserByCpfRepository(createUserParams.cpf)
  if (cpfIsUsed) {
    throw new CpfInUseError()
  }

  //TODO criptografar a senha 

  const user = await createUserRepository(createUserParams)

  return user
}

export async function depositUseCase(depositParams: DepositParams) {
  let user = await getUserByIdRepository(depositParams.userId)
  if (user) {
    const balance = user.balance + depositParams.amount
    user = await updateUserRepository(depositParams.userId, {
      balance
    })
    return user
  }else{
    throw new UserNotFound()
  }
}