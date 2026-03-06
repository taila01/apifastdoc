# FastDoc API 🚀

API desenvolvida com **Fastify**, **Prisma** e **TypeScript** para gerenciamento de documentos e fluxos de assinatura.

## 🛠️ Tecnologias
- **Node.js** + **Fastify** (Backend)
- **Prisma ORM** (Banco de dados)
- **TypeScript** (Tipagem estática)

## 🏁 Como Iniciar

1. **Instale as dependências:**
   ```bash
   npm install

```

2. **Configure o banco de dados:**
Certifique-se de que o arquivo `.env` contenha a sua `DATABASE_URL`.
3. **Sincronize o Prisma:**
```bash
npx prisma generate
npx prisma migrate dev

```


4. **Inicie o servidor:**
```bash
npm run dev

```



## 📍 Endpoints da API

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/documentos` | Cria um novo documento via JSON |
| `GET` | `/documentos` | Lista todos os documentos |
| `GET` | `/documentos/:id` | Busca um documento específico |
| `PUT` | `/documentos/:id` | Atualiza dados do documento |
| `PATCH` | `/documentos/:id/assinar` | Altera status para 'assinado' |
| `DELETE` | `/documentos/:id` | Remove o documento do sistema |

## 📝 Formato de Envio (POST)

Envie as requisições com o header `Content-Type: application/json`:

```json
{
  "titulo": "Nome do Documento",
  "conteudoTexto": "Conteúdo textual que será salvo na descrição"
}

```

## 🚀 Observação de Deploy

O servidor está configurado para rodar no host `0.0.0.0` na porta `3333` para facilitar o acesso via redes locais ou containers Docker.

```

```