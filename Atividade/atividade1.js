console.clear()

function Celular(marca, modelo, ram, armazenamento, preco) {
    this.getPreco = function () {
        return preco
    }

    this.getValores = function () {
        return { marca, modelo, ram, armazenamento }
    }
}

const iphone13 = new Celular("Xiaomi", "Redmi Note 13", 8, 258, 1090);
console.log(iphone13.getValores())
console.log(`Preço: ${iphone13.getPreco()}`)

const galaxyS21 = new Celular("Samsung", "Galaxy A35", 4, 128, 1500);
console.log(galaxyS21.getValores())
console.log(`Preço: ${galaxyS21.getPreco()}`)