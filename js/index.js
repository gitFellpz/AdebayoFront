const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
})

var idCompra = 1;

function registrarDados() {
    const nCaixas = document.getElementById('numero_caixa_vendidas').value
    const valorCompra = document.getElementById('valor__compra').value
    const formaPagamento = document.getElementById('metodo__pagamento').value

    const compra = {
        id_compra: idCompra,
        numero_de_caixas: nCaixas,
        valor_da_compra: valorCompra,
        forma_de_pagamento: formaPagamento
    }


    localStorage.setItem(`compra${idCompra}`, JSON.stringify(compra))

    console.log(localStorage)

    idCompra++
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
    


}

function limparLocal() {
    localStorage.clear()
}

