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
export class UserNotFound extends Error {
  constructor() {
    super("User not found");
    this.name = 'UserNotFound';
  }
}