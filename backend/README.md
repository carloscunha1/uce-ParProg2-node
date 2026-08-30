# API de Gerenciamento de Produtos

Backend RESTful desenvolvido em Node.js e TypeScript para gerenciamento de produtos, utilizando Express 5, PostgreSQL e Prisma ORM 7 com driver adapter `@prisma/adapter-pg`.

---

## Pré-requisitos

- **Node.js** (v18+ ou v20+)
- **PostgreSQL** em execução

---

## Instalação e Execução

### 1. Navegar até o diretório do projeto

```bash
cd backend
```
---
### 2. Instalar as dependências
```bash
npm install
```
### 3. Configurar as variáveis de ambiente

- Crie um arquivo .env na raiz do projeto (backend/) contendo:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
PORT=3000
Substitua as credenciais pelas configurações da sua instância do PostgreSQL.

### 4. Executar Migrações e Gerar o Prisma Client
```bash
# Gera o client no diretório customizado (src/generated/prisma)
npx prisma generate

# Aplica as migrações no banco de dados
npx prisma migrate dev --name init
```
### 5. Executar a aplicação
#### Desenvolvimento (Hot Reload):
```bash
npm run dev
```
Produção:
```bash
npm run build
npm start
```
