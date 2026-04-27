# Renderização de Listas

- Para renderizar uma lista vamos precisar de um `array`, contendo qualquer tipo de dados
- Depois, usaremos a função `map` para percorrer os itens da lista
- É possível **unir operadores condicionais** com a renderização de listas

## Exemplos

&emsp; Nesse exemplo, estamos supondo uma lista simples, mapeando-a e exibindo cada um de seus itens. Usamos um IF/ELSE para que, caso a lista esteja vazia seja exibido um parágrafo informando o usuário.

```js
function OutraLista({ itens }) {
    return (
        <>
            <h3>Listas de coisas boas</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index} >{item}</p>
                ))
            ) : (
                <p>Não há itens na lista.</p>
            )}
        </>
    )
}

export default OutraLista
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'OutraLista'. Ele exibe os itens de uma lista passada pela aplicação e, caso ela seja vazia, exibe uma mensagem de feedback. Caminho: 'src/Components/OutraLista.js'.</i></ins>
</p>

```js
import './App.css'
import OutraLista from './OutraLista'

function App() {

    const meusItens = ['React', 'JavaScript', 'Vue', 'Angular']

    return (
        <div className='App'>
            <h1>Renderização de Lista</h1>
            <OutraLista itens={meusItens} />
            <OutraLista itens={[]} />
        </div>
    )
}

export default App
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Arquivo de aplicação.</i></ins>
</p>
