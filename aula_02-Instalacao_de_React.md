# Como instalar o React?

- Para instalar o React vamos utilizar uma ferramenta chamada **Create React App**
- Recebemos todos os arquivos da biblioteca e **temos como executá-la**
- Para utilizar precisamos do **Node** e também **npm**
- Esta ferramenta também otimiza o app gerado para **produção**
- É possível iniciar a aplicação com `npm start`

## O que é pre-requisito?

&emsp; Verifique no terminal onde deseja criar o projeto se o **Node** e o **npm** estão baixados na máquina.

```bash
node -v
npm -v
```

&emsp; Use o comando abaixo para criar o projeto.

```bash
npx create-react-app [nome_do_projeto]
```

## Iniciando Projeto

&emsp; Depois de criado projeto, dentro da pasta que vai ter o `nome_do_projeto` passado no comando anterior, iniciamos o projeto usando o comando abaixo.

&emsp; Dentro da pasta do projeto terão as pastas principais:

- `node_modules` - dependências do projeto
- `public` - HTML que o navegador trabalhará e a **div id="root"** onde será executada a aplicação
- `src` - com lista de dependências e scripts do projeto, lista de arquivos que devem ser ignorados para o **git push**. Aquilo que for alterado no **App.js** será alterado na página do navegador.

```bash
npm start
```

&emsp; Usando o `localhost:3000`, será exibido a página padrão do React. Editando o arquivo `src/App.js` e salvando o conteúdo exibido será mudado. Também é possível ir para a documentação oficial da linguagem através do link no texto `Learn React`.
