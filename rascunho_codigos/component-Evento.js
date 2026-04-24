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