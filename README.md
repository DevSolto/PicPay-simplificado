# PicPay Simplificado - Desafio Back-end
## Introdução

Este projeto é uma implementação do desafio proposto pelo PicPay para a posição de desenvolvedor backend. O objetivo é criar uma plataforma simplificada de pagamentos onde usuários e lojistas podem realizar transações financeiras.

## Tecnologias Utilizadas

- **Linguagem de Programação**: TypeScript
- **Framework**: Fastify
- **ORM**: Prisma
- **Banco de dados**: postgresql

## Requisitos do Projeto

  

### Funcionalidades Principais

  

1. **Cadastro de Usuários e Lojistas**

- Nome Completo, CPF/CNPJ, e-mail e Senha

- CPFs/CNPJs e e-mails devem ser únicos no sistema

  

2. **Transferências**

- Usuários podem enviar dinheiro para outros usuários e lojistas

- Lojistas apenas recebem dinheiro

- Validação de saldo antes da transferência

- Consulta a serviço autorizador externo

- Transações reversíveis em caso de falha

  

3. **Notificações**

- Envio de notificações de recebimento de pagamento via serviço externo (email ou SMS)

  

### Regras de Negócio

  

- Apenas um cadastro permitido por CPF/CNPJ ou e-mail

- Transferências entre usuários e lojistas

- Validação de saldo do usuário antes da transferência

- Operações de transferência devem ser transacionais

- Envio de notificações via serviço externo

  

## Estrutura do Projeto

  ### Controllers

- `UserController`: Endpoints para cadastro de usuários e lojistas
- `TransactionController`: Endpoints para realizar transferências

### UseCases

- Implementação da lógica de negócios para cada caso de uso específico, como cadastro de usuários, realização de transferências, etc.

### Repositories

- Interação com o banco de dados utilizando Prisma para manipulação de dados de usuários, lojistas e transações

## Endpoints

### Cadastro de Usuário

```http

POST /users

Content-Type: application/json

{

"name": "João Silva",

"cpf": "123.456.789-00",

"email": "joao@example.com",

"password": "senha123",

"is_merchant": false

}

```

### Cadastro de Lojista

```http

POST /users

Content-Type: application/json

{

"name": "Loja Exemplo",

"cpf": "12.345.678/0001-99",

"email": "loja@example.com",

"password": "senha123",

"is_merchant": true

}

```

### Realizar Transferência

```http

POST /transfer

Content-Type: application/json
{

"value": 100.0,

"payer": 4,

"payee": 15

}

```

## Como Executar o Projeto

### Pré-requisitos

- [NodeJs](https://nodejs.org/en)

### Passos para Executar

1. Clone o repositório:

```bash

git clone [link-do-seu-repositorio]

cd [nome-do-repositorio]

```

1. Configure as variáveis de ambiente no arquivo `.env`.

2. Acesse a aplicação em `http://localhost:3000` (ou a porta configurada).
  
## Como Contribuir

1. Faça um fork do projeto

2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)

3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)

4. Faça push para a branch (`git push origin feature/nova-feature`)

5. Abra um Pull Request
