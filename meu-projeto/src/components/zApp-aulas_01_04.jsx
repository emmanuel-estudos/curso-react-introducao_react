// usado desde a aula 01 até a 04
function App() {
    // criação de variáveis
    const name = 'Emmanuel'

    // tratamento de variáveis/dados
    const newName = name.toUpperCase()

    // criação de funções
    function soma(valor1, valor2) {
        return valor1 + valor2
    }

    // atributos
    const url = "https://via.placeholder.com/150"

    return (
        <div className='App'>
            <h1>Apresentação de Tela</h1>

            <HelloWord />

            {/* Exibindo variáveis*/}
            <p>Olá, {name}.</p>

            {/* Exibindo variáveis tratadas */}
            <p>{newName}</p>

            {/* Realizando operações */}
            <p>Soma: {2 + 2}</p>

            {/* Utilizando função */}
            <p>Soma: {soma(2, 2)}</p>

            {/* Utilizando atributo */}
            <img src={url} alt="Minha imagem" />
        </div>
    )
}