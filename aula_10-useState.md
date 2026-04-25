# UseState

- usado para a manipulação de dados
- é um hook do React
- com ele, podemos manusear o estado (dados) de um componente de forma simples
- funciona muito bem com eventos
- podemos relacionar um evento com uma mudança de estado
- muito usados em formulários, sendo possível consultar e modificar os valores
- é necessária a sua importação antes de ser usado

## Exemplo

```js
import { useState } from "react"

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} cadastrado com sucesso. Sua senha é '${password}'.`)
    }

    const [name, setName] = useState('Matheus')
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome...">
                        onChange={(e) => setName(e.target.value)}
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha...">
                        onChange={(e) => setPassword(e.target.value)}
                    /</input>
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

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Form' que recebe os valores passados durante o preenchimento do formulário. Caminho: 'src/Components/Forms.js'.</i></ins>
</p>