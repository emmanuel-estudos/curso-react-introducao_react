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