export class EmailInUseError extends Error {
  constructor() {
    super("Email is already in use");
    this.name = 'EmailInUseError';
  }
}
export class CpfInUseError extends Error {
  constructor() {
    super("Cpf is already in use");
    this.name = 'CpfInUseError';
  }
}