<style>
    /* Reiniciando a Contagem Geral */
    body {
        counter-reset: contadorh1 1;
    }

    /* Aplica o estilo para H1 e informa que a contagem de H2 deve começar do 0 sempre que um H1 aparecer */
    h1 {
        counter-reset: contadorh2;
    }

    h1::before {
        counter-increment: contadorh1;
        counter: counter(contadorh1) ". ";
    }

    /* Aplica o estilo para H2 e informa que a contagem de H3 deve começar do 0 sempre que um H2 aparecer */
    h2 {
        counter-reset: contadorh3;
    }

    h2::before {
        counter-increment: contadorh2;
        content: counter(contadorh1) "." counter(contadorh2) ". ";
    }

    /* Aplica estilo para H3 */
    h3::before {
        counter-increment: contadorh3
        content: counter(contadorh1) "." counter(contadorh2) "." counter(contadorh3) ". ";
    }
</style>