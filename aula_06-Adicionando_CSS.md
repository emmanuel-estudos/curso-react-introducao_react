# Adicionando CSS

- O CSS pode ser **adicionado de forma global** na aplicação, por meio do arquivo `index.css`, por exemplo
- É possível também estilizar **a nível de componente**
- Usamos o **CSS Modules** para isso (Componente.module.css)
- Devemos importar o css no componente

## Diferenciações

Podemos ter um CSS global com todos os estilos em um único arquivo principal, como também podemos criar um arquivo específico para cada componente.

Os nomes das classes não devem ser declarados usando "-". A convenção é usar letras maiúsculas ou "_" para a separação de palavras de uma classe.

## Exemplo de CSS

### Criação

```css
.frase_container {
    background-color: #333;
    border: 1px solid #111;
}

.frase_content {
    color: #fff;
    background-color: #333;
    margin: 0;
}
```

### Utilização do CSS criado

No início do arquivo que está o componente que será aplicado o estilo, coloque o código abaixo. O 'styles' é um objeto que condensa todas as classes do arquivo CSS em propriedades.

```js
import styles from './caminho_arquivo/arquivo_estilo.css'
```

Um exemplo de arquivo completo:

```js
import styles from '/Frases.modules.css'

function Frase() {
    return (
        <div className={styles.frase_container}>
            <p>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase
```
