
function bomdia(nome){
    console.log(`Bom dia ${nome}!`)
}
bomdia('mano')


function mes (num) {
    switch (num) {
        case 1:
            console.log ("Janeiro")
            break;
            case 2:
            console.log ("Fevereiro")
            break;
            case 3:
            console.log ("Março")
            break;
            case 4:
            console.log ("Abril")
            break;
            case 5:
            console.log ("Maio")
            break;
            case 6:
            console.log ("Junho")
            break;
            case 7:
            console.log ("Julho")
            break;
            case 8:
            console.log ("Agosto")
            break;
            case 9:
            console.log ("Setembro")
            break;
            case 10:
            console.log ("Outubro")
            break;
            case 11:
            console.log ("Novembro")
            break;
            case 12:
            console.log ("Dezembro")
            break;
        
        default:
            console.log ("Número inválido")
            break;
    }
}


  meses(4)
        function valores (numero1, numero2){
            if (numero1 == NaN || numero2 == NaN){
                console.log ("Os  valores 1 e 2 não são iguais a números")
            }
            else if (numero1 > numero2) {
                console.log ("Valor 1 é maior que o valor 2")
            }
            else if (numero1 < numero2) {
                console.log ("Valor 2 é maior que o valor 1")
            }
        }

            valores(3, 8)
        function informacoes (salario,  quantidadeDeHorasExtras, quantidadeDeFaltas){
            var valorhoratrabalhada = salario / 176
            var valorfaltas = valorhoratrabalhada * quantidadeDeFaltas * 8
            var valorhoraextra = quantidadeDeHorasExtras * 1.5 * valorhoratrabalhada
            var salarioliquido = salario + valorhoraextra - valorfaltas

            console.log(`Salário: ${salario}\n Salarioliquido:${salarioliquido}\n Total em horas extras:${valorhoraextra}\n Total em faltas:${valorfaltas}`);





        }
        informacoes(2000, 3, 2)

        const valor1 = ["a", "b", "c", "d", "e"]

        function escolhervalores (){
            console.log(`${valor1 [0]}, ${valor1 [valor1.length-1]}`)
        }
        escolhervalores(valor1)