const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
})

let numero = localStorage.length

function registrarDados() {
    const nCaixas = document.getElementById('numero_caixa_vendidas').value
    const valorCompra = document.getElementById('valor__compra').value
    const formaPagamento = document.getElementById('metodo__pagamento').value


    if (numero == 0) {
        numero = 1
    }
    else {
        numero++
    }

    console.log(numero)

    const compra = {
        id_compra: numero,
        numero_de_caixas: nCaixas,
        valor_da_compra: valorCompra,
        forma_de_pagamento: formaPagamento
    }

    localStorage.setItem(`compra${numero}`, JSON.stringify(compra))

    console.log(localStorage)
}

async function exibirDados() {
    const table_body = document.getElementById('table__body');
    const rows = table_body.getElementsByTagName('tr');

    if (rows.length == 0) {
        for (let i = 1; i < localStorage.length + 1; i++) {

            let objeto = JSON.parse(localStorage.getItem(`compra${i}`));

            let id_compra = objeto.id_compra;
            let numero_de_caixas = objeto.numero_de_caixas;
            let valor_da_compra = objeto.valor_da_compra;
            let forma_de_pagamento = objeto.forma_de_pagamento;

            const linha = document.createElement('tr');

            let valor1 = document.createElement('td');
            let valor2 = document.createElement('td');
            let valor3 = document.createElement('td');
            let valor4 = document.createElement('td');

            let texto1 = document.createTextNode(`Compra ${id_compra}`)
            let texto2 = document.createTextNode(`${numero_de_caixas} und`)
            let texto3 = document.createTextNode(`R$ ${valor_da_compra}`)
            let texto4 = document.createTextNode(forma_de_pagamento)

            valor1.appendChild(texto1)
            valor2.appendChild(texto2)
            valor3.appendChild(texto3)
            valor4.appendChild(texto4)

            linha.appendChild(valor1)
            linha.appendChild(valor2)
            linha.appendChild(valor3)
            linha.appendChild(valor4)

            table_body.appendChild(linha)
        }
    }

    else {
        let elemento = document.querySelector("#table__body");
        let tr = elemento.querySelectorAll('tr')

        console.log(tr.length)
       

        for (let i = tr.length - 1; i >= 0; i--) {
            elemento.removeChild(tr[i]);
            console.log(tr[i]);
        }


        for (let i = 1; i < localStorage.length + 1; i++) {

            let objeto = JSON.parse(localStorage.getItem(`compra${i}`));

            let id_compra = objeto.id_compra;
            let numero_de_caixas = objeto.numero_de_caixas;
            let valor_da_compra = objeto.valor_da_compra;
            let forma_de_pagamento = objeto.forma_de_pagamento;

            const linha = document.createElement('tr');

            let valor1 = document.createElement('td');
            let valor2 = document.createElement('td');
            let valor3 = document.createElement('td');
            let valor4 = document.createElement('td');

            let texto1 = document.createTextNode(`Compra ${id_compra}`)
            let texto2 = document.createTextNode(`${numero_de_caixas} und`)
            let texto3 = document.createTextNode(`R$ ${valor_da_compra}`)
            let texto4 = document.createTextNode(forma_de_pagamento)

            valor1.appendChild(texto1)
            valor2.appendChild(texto2)
            valor3.appendChild(texto3)
            valor4.appendChild(texto4)

            linha.appendChild(valor1)
            linha.appendChild(valor2)
            linha.appendChild(valor3)
            linha.appendChild(valor4)

            table_body.appendChild(linha)
        }
    }



}

function limparLocal() {
    localStorage.clear()
}

