<style>
    /* Reiniciando a Contagem Geral */
    body {
        counter-reset: contadorh1 1 contadorLegenda 0;
    }

    /* Aplica o estilo para H1 e informa que a contagem de H2 deve começar do 0 sempre que um H1 aparecer */
    h1 {
        counter-reset: contadorh2;
        text-align: center;
    }

    h1::before {
        counter-increment: contadorh1;
    }

    /* Aplica o estilo para H2 e informa que a contagem de H3 deve começar do 0 sempre que um H2 aparecer */
    h2 {
        counter-reset: contadorh3;
    }

    h2::before {
        counter-increment: contadorh2;
        content: counter(contadorh2) ". ";
    }

    /* Aplica estilo para H3 */
    h3::before {
        counter-increment: contadorh3;
        content: counter(contadorh2) "." counter(contadorh3) ". ";
    }

    /* Legendas */
    .legenda::before {
    /* Incrementa o contador toda vez que a classe aparece */
    counter-increment: contadorLegenda;
    /* Define o texto automático */
    content: "Figura " counter(contadorLegenda) ": ";
    font-weight: bold;
}
</style>

# Introdução ao React

> **Última sincronização:** 24/04/2026 11:28:14

## Sumário de Aulas

- Aula 02 - [Como instalar o React?](#como-instalar-o-react)
- Aula 03 - [Entendendo o JSX](#entendendo-o-jsx)
- Aula 04 - [Criando Componentes no React](#criando-componentes-no-react)
- Aula 05 - [Props](#props)
- Aula 06 - [Adicionando CSS](#adicionando-css)
- Aula 07 - [Fragmentos](#fragmentos)
- Aula 08 - [Avançando em Props](#avançando-em-props)
- Aula 09 - [Eventos](#eventos)

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

### Criando um novo Componente

&emsp; Dentro da pasta `src` da raiz do projeto, crie a pasta `components` que armazenará todos os componentes criados. É uma boa prática colocar todos em um único lugar e pode ser melhor organizada criando subpastas.

&emsp; Sempre usamos a mesma formatação para a criação de arquivos de componentes, iniciando com letras maiúsculas e cada palavra começando também com letras maiúsculas. A função interna do arquivo, representando o componente, é nomeada da mesma forma e usando o mesmo nome. Exemplo: `HelloWorld.js`.

```js
// arquivo: src/components/HelloWorld.js
function HelloWord() {
    return (
        <div>
            <h1>Meu primeiro componente.</h1>
        </div>
    )
}

export default HelloWord
```

&emsp; Para utilizá-lo, precisamos fazer sua importação e chamá-lo na função principal `App`.

```js
// arquivo src/App.js
import HelloWorld from './components/HelloWorld'

function App() {
    return (
        <div>
            <HelloWorld />
        </div>
    )
}
```

### Conceito da utilização de Componentes

- são feitos para serem reutilizados
- um componente pode renderizar coisas diferentes

### Reutilização de Componentes

&emsp; A ideia principal do React é a criação de componentes para que eles possam ser reutilizados, fazendo com que não seja necessário ficar escrevendo uma mesma estrutura várias vezes.

&emsp; No processo de exportação, os componentes podem ser importados para outros e não obrigatoriamente para o `App.js`. Isso cria pilhas de importação entre arquivos, mas não tira a necessidade que o arquivo a ser utilizado precise ser importado no componente principal.

```js
// arquivo: src/components/Frase.js
function Frase() {
    return (
        <div>
            <p>Esse componente guarda uma frase.</p>
        </div>
    )
}

export default Frase
```

<p align="right" class="legenda">
  <ins><i>Criação do componente 'Frase'.</i></ins>
</p>

&emsp; Agora podemos importar 'Frase' para 'HelloWorld' e assim, toda vez que o 'HelloWorld' for usado, ele usará automaticamente o 'Frase'.

```js
// arquivo: src/components/HelloWorld.js
import Frase from './Frase'

function HelloWorld() {
    return (
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
        </div>
    )
}

export default HelloWorld
```


---

## Props

- As **props** são valores passados para um componente (atributos)
- Seu uso possibilita que os componentes sejam dinâmicos
- A **execução é mudada** de acordo com o valor do prop
- Os valores são passados como atributos na chamada do componente
- Precisa ser **resgatado dentro de uma propriedade/argumento** chamada props na função da definição do componente
- As props são **somente para a leitura**, ou seja: não são modificados, apenas recebidos e utilizados

### Primeiro Prop

```js
// arquivo: src/components/SayMyName.js
function SayMyName(props) {
    return (
        <div>
            <p>Iae {props.nome}, tudo bem?</p>
        </div>
    )
}

export default SayMyName

```

<p align="right" class="legenda">
  <ins><i>Criando o primeiro prop </i></ins>
</p>

&emsp; Para utilizá-lo no código, importamos como um componente comum e podemos passar um atributo fixo ou dinamicamente.

```js
// arquivo: src/components/App.js
import './App.css'
import HelloWord from './HelloWorld'
import SayMyName from './SayMyName'

function App() {

    const nome = "maria"

    return (
        <div className='App'>
            <HelloWord />
            <SayMyName nome='Emmanuel' />
            <SayMyName nome='José' />
            <SayMyName nome={nome} />
        </div>
    )
}

export default App

```

<p align="right" class="legenda">
  <ins><i>Exemplo de usabilidade do props.</i></ins>
</p>

### Exemplo mais complexo

&emsp; Vamos criar uma componente 'Pessoa', que naturalmente pode possuir muito mais informações.

```js
// arquivo: src/components/Pessoa.js
function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome} />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>  
    )

}

export default Pessoa
```

<p align="right" class="legenda">
  <ins><i>Criação do componente 'Pessoa'.</i></ins>
</p>

```js
// arquivo: src/App.js
return (
        <div className='App'>
            <Pessoa
                nome="Nome1"
                idade="30"
                profissao="nenhuma"
                foto="https://via.placeholder.com/150"
            />
        </div>
    )

```

<p align="right" class="legenda">
  <ins><i>Aplicando o componente 'Pessoa' no 'App.js'.</i></ins>
</p>

&emsp; Perceba que é um recurso interessante, mas que ainda sim dá um certo trabalho por causa da repetição da palavra **props**. Para resolver isso, podemos desestruturá-la e ficar com a estrutura de uma função, com os parâmetros sendo passados diretamente.

```js
// arquivo: src/components/Pessoa.js
function Pessoa(nome, idade, profissao) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>  
    )
}

export default Pessoa

```


---

## Adicionando CSS

- O CSS pode ser **adicionado de forma global** na aplicação, por meio do arquivo `index.css`, por exemplo
- É possível também estilizar **a nível de componente**
- Usamos o **CSS Modules** para isso (Componente.module.css)
- Devemos importar o css no componente

### Diferenciações

&emsp; Podemos ter um CSS global com todos os estilos em um único arquivo principal, como também podemos criar um arquivo específico para cada componente.

&emsp; Os nomes das classes não devem ser declarados usando "-". A convenção é usar letras maiúsculas ou "_" para a separação de palavras de uma classe.

### Exemplo de CSS

#### Criação

```css
.frase_container {
    background-color: #333;
    border: 1px solid #111;
}

.frase_content {
    color: #fff;
    background-color: #333;
    margin: 0;
}
```

#### Utilização do CSS criado

&emsp; No início do arquivo que está o componente que será aplicado o estilo, coloque o código abaixo. O 'styles' é um objeto que condensa todas as classes do arquivo CSS em propriedades.

```js
import styles from './caminho_arquivo/arquivo_estilo.css'
```

&emsp; Um exemplo de arquivo completo:

```js
import styles from '/Frases.modules.css'

function Frase() {
    return (
        <div className={styles.frase_container}>
            <p>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase
```


---

## Fragmentos

- Os **Reacts Fragments** permitem a criação de um componente sem elemento pai
- O seu propósito é **desacoplamento de nós do DOM**
- A sintáxe é **`<>`** e **``</>``** e não há um nome para a tag
- Criamos no próprio JSX

### Exemplo

&emsp; Para a criação de uma lista com elementos representando marcas de carro, mas sem o encapsulamento de retorno em uma `div`. A `div` de encapsulamento é substituida por `<>` e `</>`.

&emsp; Na construção do HTML por meio dos componentes, a tag vazia não é registrada e fica somente seu conteúdo, deixando o código mais limpo e evitando tags desncessárias.

```js
function Item(props) {
    return (
        <>
            <li>{props.marca}</li>
        </li>
    )
}

export default Item
```

<p align="right" class="legenda">
  <ins><i>Componente 'Item'. Caminho de arquivo: 'src/Components/Item.js'</i></ins>
</p>


```js
import Item from '.Item'

function List() {
    return (
        <div>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
            </ul>
        </div>
    )
}

export default List
```

<p align="right" class="legenda">
  <ins><i>Componente 'List'. Caminho de arquivo: 'src/Components/List.js'</i></ins>
</p>



---

## Avançando em Props

- Podemos **definir tipos para Props**, realizando portando um tipo de validação
- Definimos um objeto chamado `propTypes` no próprio componente
- Ainda há a possibilidade de **definir um valor padrão**, neste caso, utilizaremos o objeto ``defaultProps``

&emsp; Essa validação é feita no nível de programação. Caso as exigências não sejam atendidas, não irá aparecer um erro para o usuário, mas no `console` será possível perceber o tipo de erro especificado.

&emsp; Um ponto que se deve ter em mente é que `defaultProps` tiram os erros exibidos no console com os `propTypes` definidos.

### Exemplo

```js
import PropTypes from 'prop-types'

function Item ( marca, ano_lancamento) {
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "A marca não foi informada.",
    ano_lancamento: 0
}

export default Item
```

<p align="right" class="legenda">
  <ins><i>Componente 'Item', usado em 'List'. Caminho: src/Components/Item.js</i></ins>
</p>

```js
import Item from './component-Item'

function List() {
    return (
        <>
            <h1>Minha lista de carros</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964} />
                <Item marca="Renault" />
            </ul>
        </>
    )
}
```

<p align="right" class="legenda">
  <ins><i>Componente 'List'. Caminho: src/Components/List.js</i></ins>
</p>



---

## Eventos

- Os eventos em React são os mesmo do DOM, ou seja, também temos eventos para responder a ação de um click
- Cada evento está atrelado a uma tag, que irá executá-lo
- Geralmente um **método** é atribuído ao evento e deve ser criado no componente

&emsp; Esse evento pode ser chamado ou até modificado por uma propriedade.

&emsp; O evento de `click` é o mesmo do JavaScript, executando uma ação assim que um elemento recebe um click.

&emsp; Outro evento útil é o de `Formulário`. Temos também uma forma de segurar o resultado de um evento, já que um formulário teria que conversar com o backend, mas este comportamento padrão do HTML é parado e o recarregamento do componente não acontece.

### Exemplo

```js
function Evento({ numero }) {

    function meuEvento() {
        console.log(`Evento ${numero} ativado.`)
    }

    return (
        <div>
            <p>Clique aqui para disparar o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
```

<p align="right" class="legenda">
  <ins><i>Componente 'Evento'. Caminho: 'src/Components/Evento.js'.</i></ins>
</p>

```js
function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Usuário cadastrado com sucesso.')
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome..."></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form
```

<p align="right" class="legenda">
  <ins><i>Componente 'Form'. Caminho: 'src/Components/Form.js'.</i></ins>
</p>

---

