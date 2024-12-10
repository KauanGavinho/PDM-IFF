const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
];

// 1) Exibir somente os eletrônicos (usando filter)
const eletrônicos = produtos.filter(produto => produto.eletronico);
console.log("Eletrônicos:", eletrônicos);

// 2) Exibir produtos com valor acima de R$ 1000,00 (usando filter)
const acimaDeMil = produtos.filter(produto => produto.preco > 1000);
console.log("Produtos acima de R$ 1000,00:", acimaDeMil);

// 3) Exibir comissão com 3% para valores acima de 1500 e 6% para menores (usando map e reduce)
const comissões = produtos.map(produto => {
    const comissão = produto.preco > 1500 ? produto.preco * 0.03 : produto.preco * 0.06;
    return { ...produto, comissão };
});
console.log("Comissões:", comissões);

// 4) Calcular o total de preços dos produtos usando reduce
const totalPreco = produtos.reduce((acc, produto) => acc + produto.preco, 0);
console.log("Total do preço de todos os produtos:", totalPreco);
