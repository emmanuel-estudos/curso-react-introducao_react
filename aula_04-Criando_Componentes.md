# Criando Componentes no React

## Componentes

- Permite dividir a aplicação em partes
- Os componentes **renderizam JSX**, assim como o App.js (que é um componente)
- Precisamos **criar um arquivo** de componentes
- Precisamos **importá-lo** onde precisamos utilizar
- Normalmente ficam em uma pasta chamadas **components**

## Criando um novo Componente

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

## Conceito da utilização de Componentes

- são feitos para serem reutilizados
- um componente pode renderizar coisas diferentes

## Reutilização de Componentes

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