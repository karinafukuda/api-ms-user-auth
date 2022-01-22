## Microsserviço de autenticação com NodeJS

<br/>

Desenvolvido um CRUD básico que gera usuário através de uuid com `crypto` , consulta lista sem exibir senha, consulta por uuid, altera o cadastro podendo gerar nova criptografia para a senha e deleta usuário. Também será capaz de autenticar e validar um usuário.

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
- ts-node-dev

Alguns Endpoints Base deste projeto podem ser extendidos da forma mais adequada para seu contexto.

[ Em progresso... ]

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

### Para inicializar

```
npm run dev
```

---

Aula de NodeJS do Renan Johannsen na DIO.
