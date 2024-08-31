console.clear()

const bolo = {
    nome: 'Cenoura', peso: '500g', preco: 20, getPreco: function () {
        return bolo.preco
    }, getDesconto: function (desconto) {
        bolo.preco = bolo.preco - Math.round((bolo.preco * desconto))
        return bolo.preco
    }
}
console.log(`\nNome: ${bolo.nome}`)
console.log(`Valor sem desconto: ${bolo.getPreco()}`)
console.log(`Valor com desconto: ${bolo.getDesconto(0.50)}`)


const bolo2 = new Object()


function Bolo(nome, peso, preco) {
    this.getNome = function () {
        return nome
    }

    this.getPreco = function () {
        return preco
    }

    this.getDesconto = function (desconto) {
        preco = preco - Math.round((preco * desconto))
        return preco
    }
}

const bolo3 = new Bolo('Chocolate', '750g', 20)
console.log(`\nNome: ${bolo3.getNome()}`)
console.log(`Valor sem desconto: ${bolo3.getPreco()}`)
console.log(`Valor com desconto: ${bolo3.getDesconto(0.20)}`)