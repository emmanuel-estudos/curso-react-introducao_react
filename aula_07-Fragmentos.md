# Fragmentos

- Os **Reacts Fragments** permitem a criação de um componente sem elemento pai
- O seu propósito é **desacoplamento de nós do DOM**
- A sintáxe é **`<>`** e **``</>``** e não há um nome para a tag
- Criamos no próprio JSX

## Exemplo

Para a criação de uma lista com elementos representando marcas de carro, mas sem o encapsulamento de retorno em uma `div`. A `div` de encapsulamento é substituida por `<>` e `</>`.

Na construção do HTML por meio dos componentes, a tag vazia não é registrada e fica somente seu conteúdo, deixando o código mais limpo e evitando tags desncessárias.

```js
// arquivo src/Components/Item.js

function Item(props) {
    return (
        <>
            <li>{props.marca}</li>
        </li>
    )
}

export default Item
```

```js
// arquivo src/Components/List.js

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
