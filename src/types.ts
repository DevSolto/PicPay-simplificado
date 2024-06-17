export type CreateUserParams = {
  name: string
  cpf: string
  email: string
  password: string
  isMerchant?: boolean
}
export type UpdateUserParams = {
  name?: string
  cpf?: string
  email?: string
  password?: string
  isMerchant?: boolean
  balance?: number
}

export type DepositRequestParams = {
  userId: string
}
export type DepositParams = {
  amount: number
  userId: string
}

export type DepositBody = {
  amount: number
}

export type CreateTransactionParams = {
  value: number
  payerId: string
  payeeId: string
}