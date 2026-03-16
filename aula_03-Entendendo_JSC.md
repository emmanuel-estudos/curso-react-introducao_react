# Entendendo o JSX

- O **JSX** é como um HTML, porém dentro do código JavaScript
- É a principal maneira de escrever HTML com o React
- Podemos **interpolar variáveis**, inserindo ela entre {}
- É possível também **executar funções** em JSX
- Inserir **valores em atributos de tags** também é válido em JSX

## Função App()

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