# Eventos

- Os eventos em React são os mesmo do DOM, ou seja, também temos eventos para responder a ação de um click
- Cada evento está atrelado a uma tag, que irá executá-lo
- Geralmente um **método** é atribuído ao evento e deve ser criado no componente

&emsp; Esse evento pode ser chamado ou até modificado por uma propriedade.

&emsp; O evento de `click` é o mesmo do JavaScript, executando uma ação assim que um elemento recebe um click.

&emsp; Outro evento útil é o de `Formulário`. Temos também uma forma de segurar o resultado de um evento, já que um formulário teria que conversar com o backend, mas este comportamento padrão do HTML é parado e o recarregamento do componente não acontece.

## Exemplo

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

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Form'. Caminho: 'src/Components/Form.js'.</i></ins>
</p>