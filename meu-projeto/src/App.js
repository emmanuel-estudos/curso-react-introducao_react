import './App.css'
import HelloWord from '../src/components/HelloWorld'
import SayMyName from '../src/components/SayMyName'
import Pessoa from '../src/components/Pessoa'

function App() {

    const nome = "maria"

    return (
        <div className='App'>
            <HelloWord />
            <SayMyName nome='Emmanuel' />
            <SayMyName nome='José' />
            <SayMyName nome={nome} />

            <Pessoa
                nome="Nome1"
                idade="30"
                profissao="nenhuma"
                foto="https://via.placeholder.com/150"
            />
        </div>
    )
}

export default App
