import { CpfInUseError, EmailInUseError } from "../errors/user";
import { createUserRepository, getUserByCpf, getUserByEmail } from "../repositories/user";
import { CreateUserParams } from "../types";

export async function createUserUseCase(createUserParams:CreateUserParams){


  const emailIsUsed = await getUserByEmail(createUserParams.email)
  if(emailIsUsed){
    throw new EmailInUseError()
  }
  const cpfIsUsed = await getUserByCpf(createUserParams.cpf)
  if(cpfIsUsed){
    throw new CpfInUseError()
  }
  //TODO verificar se o cpf ja está em uso

  const user = await createUserRepository(createUserParams)

  return user
}