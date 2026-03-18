# Props

- As **props** são valores passados para um componente (atributos)
- Seu uso possibilita que os componentes sejam dinâmicos
- A **execução é mudada** de acordo com o valor do prop
- Os valores são passados como atributos na chamada do componente
- Precisa ser **resgatado dentro de uma propriedade/argumento** chamada props na função da definição do componente
- As props são **somente para a leitura**, ou seja: não são modificados, apenas recebidos e utilizados

## Primeiro Prop

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

## Exemplo mais complexo

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
