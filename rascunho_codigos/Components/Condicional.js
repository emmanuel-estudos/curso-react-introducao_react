import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    // suposição de manipulação do dado informado antes se sua submissão ao backend
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    // Limpando o email cadastrado passado uma string vazia em seu lugar, deixando a condição de renderização como 'false'
    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input
                    type="email"
                    placeholder="Digite seu email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>

                {/* Exibição de Conteúdo com base em uma condição (se o userEmail é 'true') */}
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional