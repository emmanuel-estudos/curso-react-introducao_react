# React Router

- É um pacote para mudança de URLs da aplicação
- É **necessária a sua instalação** no projeto
- Podemos assim acessar outras views, **sem o page reload**
- **Trocando apenas uma parte do layout da aplicação**, ou seja, o que muda de view para view
- Também realiza mudanças em como o App é estruturado

## Instalação do Pacote

```bash
npm install react-router-dom
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Código necessário para a instalação do pacote no projeto.</i></ins>
</p>

## Exemplo

&emsp; Nesse exemplo, a barra de navegação e o footer são mantidos independente da página que está sendo renderizada. As páginas são trocadas sem a necessidade da abertura de novas abas no navegador porque a organização das rotas faz com que a página/elemento escolhido seja renderizado no lugar daquele que estava aparecendo anteriormente.

```js
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Empresa from './Pages/Empresa'
import Contato from './Pages/Contato'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {

    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route path='/empresa' >
                    <Empresa />
                </Route>
                <Route path='/contato' >
                    <Contato />
                </Route>
            </Switch>

            <Footer />
        </Router>
    )
}

export default App
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Arquivo de implementação.</i></ins>
</p>

```js
function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Conteúdo da página Home</p>
        </>
    )
}

export default Home
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Home'. Simula o código da home de um site. O mesmo código foi utilizado para simular as páginas de 'Empresa' e de 'Contato'. Caminho: 'src/Pages/Home.js'.</i></ins>
</p>

```js
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <>
            <ul className={styles.list}>
                <li className='styles.item'>
                    <Link to='/' >Home</Link>
                </li>
                <li className='styles.item'>
                    <Link to='/empresa' >Empresa</Link>
                </li>
                <li className='styles.item'>
                    <Link to='/contato' >Contato</Link>
                </li>
            </ul>
        </>
    )
}

export default NavBar
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'NavBar'. Responsável por renderizar a barra de navegação. Caminho: 'src/Components/NavBar.js'.</i></ins>
</p>

```js
function Footer() {
    return (
        <>
            <footer>Rodapé da Página</footer>
        </>
    )
}

export default Footer
```

<p align="right" class="bloco-de-codigo">
  <ins><i>Componente 'Footer'. Responsável por renderizar o footer do site. Caminho: 'src/Components/Footer.js'.</i></ins>
</p>