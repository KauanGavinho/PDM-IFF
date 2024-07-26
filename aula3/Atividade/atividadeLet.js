/**/
/*Considere o seguinte código JavaScript:*/


function Let() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log("Dentro do bloco: ", x);
    }
    console.log("Fora do bloco: ", x);
}

Let();

/*Qual será a saída no console quando a função Let() for chamada?*/

/*Resposta: a saída no console será "Dentro do bloco: 20, Fora do bloco: 10" nesta ordem.*/