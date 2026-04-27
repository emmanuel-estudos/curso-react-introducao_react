# Renderização Condicionada

- Podemos atrelar a exibição de algum item/componente a uma condição
- Envolvemos a tag em chaves **{}**
- Como as **chaves executam JavaScript**, criamos a condição
- É possível usar o **state** para criar as condições

## Exemplo

```js
import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    // suposição de manipulação do dado informado antes se sua submissão ao backend
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    // Limpando o email cadastrado passado uma string vazia em seu lugar, deixando a condição de renderização como 'false'
    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite seu email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>

                {/* Exibição de Conteúdo com base em uma condição (se o userEmail é 'true') */}
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Condicional'. Demonstra a renderização de conteúdo com base em uma condição. Caminho: 'src/Components/Condicional.js'. </i></ins>
</p>

```js
import './App.css'
import Condicional from './component-Condicional'

function App() {
    return (
        <div className='App'>
            <h1>Renderização Condicional</h1>
            <Condicional />
        </div>
    )
}

export default App
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Arquivo 'App.js'. Aplicação do componente de renderização.</i></ins>
</p>