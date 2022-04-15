# Autenticação JWT com React Router e React Context API

Mini projeto de autenticação JWT com React e TypeScript utilizando React Router e React Context API para gerenciamento de estados globais da aplicação.

_Read this in English: [English](README.en.md)._

## Principais Tecnologias e Bibliotecas utilizadas:

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [Vite](https://vitejs.dev/)

## Funcionamento do backend

A aplicação se comunica com um backend que deve ter dois endpoints: `/signin` e `/validateToken`.

Para o endpoint `/signin` a requisição do tipo POST envia o email e senha do usuário em um JSON como o abaixo:

```json
{
  "email": "user@email.com",
  "password": "userpassword"
}
```

Se o email e senha estiverem corretos a requisição irá retornar os dados do usuário com o token JWT

```json
{
	"name": "user",
	"email": "user@email.com",
	"id": 10,
	"iat": 1650033142,
	"exp": 1650119542,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBlbWFpbC5jb20iLCJpZCI6MTAsImlhdCI6MTY1MDAzMzE0MiwiZXhwIjoxNjUwMTE5NTQyfQ.xkJDeh27qKlAnGxWhOtijSr8iRVnRVVs0Ko__Rh59pU"
}
```

Já no endpoint `validateToken`, uma requisição do tipo POST é feita com os mesmos dados do JSON acima. O endpoint então retorna `true` ou `false` de acordo com a integridade e data de expiração do token.

## Testando a aplicação

Para a testar a aplicação, clone o repositório em sua máquina e execute os comandos abaixo para iniciar a aplicação em modo de desenvolvimento:

```bash
cd autenticacao-react-router-context-api
yarn && yarn dev
```

Após isso a aplicação já estará em funcionamento e pode ser acessada pela URL: [localhost:3000](http://localhost:3000).

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Página de login onde email e senha devem ser inseridos. Após fazer o login, o usuário retorna a página anterior;
- Página protegida: acesso permitido somente por usuários autenticados. Caso o usuário não esteja autenticado, ele é redirecionado para a página de login;
- Menu contendo um botão de login (Sign In) ou logout (Sign out) de acordo com o estado de autenticação do usuário;
- Armazenamento do token do usuário no local storage;
- Gerenciamento do header Authorization para incluir o token nas requisições para rotas protegidas.