import './App.css'
import Evento from './component-Evento'
import Form from './component-Form'

function App() {
    return (
        <div className='App'>
            <h1>Testando Evento</h1>
            <Evento numero='1' />
            <Evento numero='2' />
            <Form />
        </div>
    )
}