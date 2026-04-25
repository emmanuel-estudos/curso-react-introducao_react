# Métodos por Props

- Os **métodos** também podem ser passados por props, ou seja, um **componente filho** pode ativar o método do seu pai
- Vamos acessar os métodos por meio de um evento
- A sintaxe é a mesma de um props de dados: `props.meuEvento`
- os métodos ficam centralizados no componente pai para não limitar de mais a função final do componente filho
- Resumo: enviar funções através de propriedades para componentes filhos através de componentes pais

## Exemplo

```js
function Button() {
    return (
        <>
            <button onClick={props.event}>{props.text}</button>
        </>
    )
}

export default Button
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Button'. Caminho: 'src/Components/Button.js'.</i></ins>
</p>

```js
import Button from "./component-Button"

function Evento() {

    function meuEvento() {
        console.log(`Ativando o primeiro evento.`)
    }

    function segundoEvento() {
        console.log(`Ativando o segundo evento`)
    }

    return (
        <div>
            <p>Clique aqui para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro evento."/>
            <Button event={segundoEvento} text="Segundo evento."/>
        </div>
    )
}

export default Evento
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Evento'. Caminho: 'src/Components/Evento.js'.</i></ins>
</p>

&emsp; Aqui temos duas funções tendo origem no mesmo componente, mas agindo de formas independentes. É possível ativar os dois separadamente, pois na prática são dois componentes diferentes com o mesmo código de origem.

```js
import './App.css'
import Evento from './component-Evento'
import Form from './component-Form'

function App() {
    return (
        <div className='App'>
            <h1>Testando Evento</h1>
            <Evento />
            <Form />
        </div>
    )
}
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Arquivo 'App.js'.</i></ins>
</p>