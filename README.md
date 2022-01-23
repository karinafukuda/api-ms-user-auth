## Microsserviço de autenticação com NodeJS

<br/>

Desenvolvido um CRUD básico que:

- Gera usuário através de uuid com `crypto` ;
- Consulta lista usuários sem exibir senha ;
- Consulta por uuid único usuário ;
- Altera o dados do usuário ;
- Deleta usuário por uuid;
- Autentica usuário gerando token via `Basic Auth` ;
- Valida um usuário por token via `Bearer Token` ;

## Tecnologias

- Typescript
- NodeJS
- VSCode
- Npm
- Git

### Dependências

- express
- http-status-codes
- pg (PostgreSQL)
- JWT
- ts-node-dev

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

### Configurações iniciais

```
Em: db.ts coloque uma string do banco de dados válida do postgreSQL
```

### Para inicializar

```
npm run dev
```

---

Aula de NodeJS do Renan Johannsen na DIO.
