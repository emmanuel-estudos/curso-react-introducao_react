function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {

        return `Olá, ${algumNome}, tudo bem contigo?`

    }

    return (
        <>
            {nome && 
                <p>{gerarSaudacao(nome)}</p>
            }
        </>
    )
}

export default Saudacao