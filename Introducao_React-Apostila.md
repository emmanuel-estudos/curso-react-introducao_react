<style>
    /* Reiniciando a Contagem Geral */
    body {
        counter-reset: contadorh1 1;
    }

    /* Aplica o estilo para H1 e informa que a contagem de H2 deve começar do 0 sempre que um H1 aparecer */
    h1 {
        counter-reset: contadorh2;
    }

    h1::before {
        counter-increment: contadorh1;
        counter: counter(contadorh1) ". ";
    }

    /* Aplica o estilo para H2 e informa que a contagem de H3 deve começar do 0 sempre que um H2 aparecer */
    h2 {
        counter-reset: contadorh3;
    }

    h2::before {
        counter-increment: contadorh2;
        content: counter(contadorh1) "." counter(contadorh2) ". ";
    }

    /* Aplica estilo para H3 */
    h3::before {
        counter-increment: contadorh3
        content: counter(contadorh1) "." counter(contadorh2) "." counter(contadorh3) ". ";
    }
</style>

# Introdução ao React

## Sumário de Aulas

- Aula 02 - [Como instalar o React?](#como-instalar-o-react)
- Aula 03 - [Entendendo o JSX](#entendendo-o-jsx)
- Aula 04 - [Criando Componentes no React](#criando-componentes-no-react)

---

## Como instalar o React?

- Para instalar o React vamos utilizar uma ferramenta chamada **Create React App**
- Recebemos todos os arquivos da biblioteca e **temos como executá-la**
- Para utilizar precisamos do **Node** e também **npm**
- Esta ferramenta também otimiza o app gerado para **produção**
- É possível iniciar a aplicação com `npm start`

### O que é pre-requisito?

&emsp; Verifique no terminal onde deseja criar o projeto se o **Node** e o **npm** estão baixados na máquina.

```bash
node -v
npm -v
```

&emsp; Use o comando abaixo para criar o projeto.

```bash
npx create-react-app [nome_do_projeto]
```

### Iniciando Projeto

&emsp; Depois de criado projeto, dentro da pasta que vai ter o `nome_do_projeto` passado no comando anterior, iniciamos o projeto usando o comando abaixo.

&emsp; Dentro da pasta do projeto terão as pastas principais:

- `node_modules` - dependências do projeto
- `public` - HTML que o navegador trabalhará e a **div id="root"** onde será executada a aplicação
- `src` - com lista de dependências e scripts do projeto, lista de arquivos que devem ser ignorados para o **git push**. Aquilo que for alterado no **App.js** será alterado na página do navegador.

```bash
npm start
```

&emsp; Usando o `localhost:3000`, será exibido a página padrão do React. Editando o arquivo `src/App.js` e salvando o conteúdo exibido será mudado. Também é possível ir para a documentação oficial da linguagem através do link no texto `Learn React`.

---

## Entendendo o JSX

- O **JSX** é como um HTML, porém dentro do código JavaScript
- É a principal maneira de escrever HTML com o React
- Podemos **interpolar variáveis**, inserindo ela entre {}
- É possível também **executar funções** em JSX
- Inserir **valores em atributos de tags** também é válido em JSX

### Função App()

&emsp; Quando criamos uma variável ou queremos modificar algo, mexemos nessa função. O arquivo dessa função será o orquestrador mestre.

&emsp; Exemplo de código:

```js
import './App.css'

function App() {
    // criação de variáveis
    const name = 'Emmanuel'

    // tratamento de variáveis/dados
    const newName = name.toUpperCase()

    // criação de funções
    function soma(valor1, valor2) {
        return valor1 + valor2
    }

    // atributos
    const url = "https://via.placeholder.com/150"

    return (
        <div className='App'>
            <h1>Apresentação de Tela</h1>

            {/* Exibindo variáveis*/}
            <p>Olá, {name}.</p>

            {/* Exibindo variáveis tratadas */}
            <p>{newName}</p>

            {/* Realizando operações */}
            <p>Soma: {2 + 2}</p>

            {/* Utilizando função */}
            <p>Soma: {soma(2, 2)}</p>

            {/* Utilizando atributo */}
            <img src={url} alt="Minha imagem" />
        </div>
    )
}

export default App
```

---

## Criando Componentes no React

### Componentes

- Permite dividir a aplicação em partes
- Os componentes **renderizam JSX**, assim como o App.js (que é um componente)
- Precisamos **criar um arquivo** de componentes
- Precisamos **importá-lo** onde precisamos utilizar
- Normalmente ficam em uma pasta chamadas **components**


---

