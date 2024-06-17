import { InsufficientFunds, MerchantsCannotSendMoney, PayeeNotFound, PayerNotFound } from "../errors/transaction";
import { getUserByIdRepository, updateUserRepository } from "../repositories/user";
import { CreateTransactionParams } from "../types";

export async function createTransactionUseCase({ payeeId, payerId, value }: CreateTransactionParams) {
  
  let payer = await getUserByIdRepository(payerId)

  if (!payer) {
    throw new PayerNotFound()
  }else if(payer.isMerchant){
    throw new MerchantsCannotSendMoney()
  }

  let payee = await getUserByIdRepository(payeeId)

  if (!payee) {
    throw new PayeeNotFound()
  }

  if (payer.balance < value) {
    throw new InsufficientFunds()
  }

  payer = await updateUserRepository(payerId, { balance: payer.balance - value })
  payee = await updateUserRepository(payeeId, { balance: payee.balance + value })

  return {
    payee:payee,
    payer:payer

  }

}