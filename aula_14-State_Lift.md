# State Lift

- É uma técnica utilizada para compartilhar o `state`
- É normal **vários componentes dependerem de um mesmo estado**, então precisamos elevar o nível do mesmo para um **componente pai**
- Centralizamos o estado no componente pai, e informamos **quem vai usar** e **quem vai definir** o estado (setState)

## Exemplo

&emsp; Nesse exemplo, o nome é definido pelo componente `SeuNome` e é exibido depois da modificação pelo componente `Saudação`. Se ainda não tiver sido definido nenhum nome, o componente não é renderizado.

```js
import { useState } from 'react'
import './App.css'
import SeuNome from './SeuNome'
import Saudacao from './Saudacao'

function App() {

    const [nome, setNome] = useState()

    return (
        <div className='App'>
            <h1>State Lift</h1>
            <SeuNome setNome={setNome} />
            <Saudacao nome={nome}/>
        </div>
    )
}

export default App
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente de aplicação.</i></ins>
</p>

```js
function SeuNome({ setNome }) {
    return (
        <div>
            <p>Digitre seu nome:</p>
            <input 
                type="text"
                placeholder="Qual o seu nome?"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'SeuNome'. Responsável por modificar o estado do nome. Caminho: 'src/Components/SeuNome.js'.</i></ins>
</p>

```js
function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {

        return `Olá, ${algumNome}, tudo bem contigo?`

    }

    return (
        <>
            {nome && 
                <p>{gerarSaudacao(nome)}</p>
            }
        </>
    )
}

export default Saudacao
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Saudação'. Responsável por utilizar o nome informado e renderizar o conteúdo de saudação. Caminho: 'src/Components/Saudacao.js'.</i></ins>
</p>