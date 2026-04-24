# Fragmentos

- Os **Reacts Fragments** permitem a criação de um componente sem elemento pai
- O seu propósito é **desacoplamento de nós do DOM**
- A sintáxe é **`<>`** e **``</>``** e não há um nome para a tag
- Criamos no próprio JSX

## Exemplo

&emsp; Para a criação de uma lista com elementos representando marcas de carro, mas sem o encapsulamento de retorno em uma `div`. A `div` de encapsulamento é substituida por `<>` e `</>`.

&emsp; Na construção do HTML por meio dos componentes, a tag vazia não é registrada e fica somente seu conteúdo, deixando o código mais limpo e evitando tags desncessárias.

```js
function Item(props) {
    return (
        <>
            <li>{props.marca}</li>
        </li>
    )
}

export default Item
```

<p align="right" class="legenda">
  <ins><i>Componente 'Item'. Caminho de arquivo: 'src/Components/Item.js'</i></ins>
</p>


```js
import Item from '.Item'

function List() {
    return (
        <div>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Fiat"/>
            </ul>
        </div>
    )
}

export default List
```

<p align="right" class="legenda">
  <ins><i>Componente 'List'. Caminho de arquivo: 'src/Components/List.js'</i></ins>
</p>