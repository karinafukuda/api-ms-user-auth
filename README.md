## Microsserviço de autenticação com Node.js

Desenvolvido um CRUD básico que:

- Gera usuário através de uuid com `crypto` ;
- Consulta lista usuários sem exibir senha ;
- Consulta por uuid um único usuário ;
- Altera o dados do usuário ;
- Deleta usuário por uuid;
- Autentica usuário gerando token via `Basic Auth` ;
- Valida um usuário por token via `Bearer Token` com tempo de expiração de 15 minutos;

---

## Tecnologias

- TypeScript
- Node.js
- Npm
- Git

### Dependências

- express
- http-status-codes
- pg (PostgreSQL)
- JWT (JsonWebToken)
- ts-node-dev

---

Alguns Endpoints Base deste projeto podem ser extendidos da forma mais adequada para seu contexto.

| Usuários ~ | Endpoint        |
| :--------- | :-------------- |
| GET        | `/users `       |
| GET        | `/users/:uuid ` |
| POST       | `/users`        |
| PUT        | `/users/:uuid`  |
| DELETE     | `/users/:uuid`  |

| Autenticação ~ | Endpoint          |
| :------------- | :---------------- |
| POST           | `/token`          |
| POST           | `/token/validate` |

---

## Para clonar esse repositório:

```
git clone https://github.com/karinafukuda/api-ms-user-auth.git

```

<br/>

## Configurações iniciais

```
No arquivo <db.ts> coloque uma string válida de acesso ao banco de dados em PostgreSQL
```

### Para instalar as dependências

```
npm install
```

### Para inicializar

```
npm run dev
```

---

Aula de NodeJS do Renan Johannsen na DIO.
