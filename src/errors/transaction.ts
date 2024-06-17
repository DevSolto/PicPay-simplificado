export class PayerNotFound extends Error {
  constructor() {
    super("Payer not found");
    this.name = 'PayerNotFound';
  }
}
export class PayeeNotFound extends Error {
  constructor() {
    super("Payee not found");
    this.name = 'PayeeNotFound';
  }
}
export class InsufficientFunds extends Error {
  constructor() {
    super("insufficient funds");
    this.name = 'InsufficientFunds';
  }
}
export class MerchantsCannotSendMoney extends Error {
  constructor() {
    super("merchants cannot send money");
    this.name = 'MerchantsCannotSendMoney';
  }
}