# Avançando em Props

- Podemos **definir tipos para Props**, realizando portando um tipo de validação
- Definimos um objeto chamado `propTypes` no próprio componente
- Ainda há a possibilidade de **definir um valor padrão**, neste caso, utilizaremos o objeto ``defaultProps``

&emsp; Essa validação é feita no nível de programação. Caso as exigências não sejam atendidas, não irá aparecer um erro para o usuário, mas no `console` será possível perceber o tipo de erro especificado.

&emsp; Um ponto que se deve ter em mente é que `defaultProps` tiram os erros exibidos no console com os `propTypes` definidos.

## Exemplo

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