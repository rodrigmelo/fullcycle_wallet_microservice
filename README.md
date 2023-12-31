## WALLET-MICROSERVICE

Esse é um projeto que simula uma conta bancária simplificada que realiza ações de crédito e débito em contas de clientes cadastrados. O primeiro serviço realiza as ações nas contas dos clientes e um segundo serviço é responsável por armazenar os saldos totais das contas.
Esse projeto conta com dois microserviços desenvolvidos em golang e javascript respectivamente. O projeto utiliza o kafka para que ambas as aplicações possam se comunicar.

### Preparando o ambiente

1. Clone este repositório.
2. Execute `docker-compose up -d`.
3. Aguarde até que todos os containers estejam prontos.

### Como utilizar

1. Assim que a aplicação inicia as seguintes tabelas nos bancos de dados são criadas:
    - clients
    - accounts
    - transactions
    - balances

   As três primeiras tabelas são criadas no projeto golang e última no projeto javascript.
   As aplicações utilizam bancos de dados individuais.

 3. As tabelas são automaticamente populadas com as seguintes informações:
    - clients:
        - id: 1, name: John Doe
        - id: 2, name: Jane Smith
    - accounts:
        - id: 1, client_id: 1, balance: 1000
        - id: 2, client_id: 2, balance: 0
    - balances:
        - id: 1, account_id: 1, balance: 1000
        - id: 2, account_id: 2, balance: 0
        
4. Cada serviço contem um arquivo .http com as requests necessárias para testar a aplicação
  - golang:
    - api/client.http: É possível efetuar transações para alterar o saldo das contas pré-cadastradas (http://localhost:8080/transactions)
  - javascript:
    - src/api/client.http: É possivel consultar o saldo total das contas passando o id (http://localhost:3003/balances/id)
