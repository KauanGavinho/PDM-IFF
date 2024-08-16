function carro(velMax = 200, aceleracao = 5, nome = "nome do carro"){
    let velAtual = 0//variavel privada
this.setAceleracao = function(x){
    aceleracao = x
}
    this.setAcelerar = function (){
        velAtual = (velAtual+ this.aceleracao <= velMax) ? (velAtual + this.aceleracao):(velMax)
    }
    this.getVelAtual = function(){
        return velAtual
    }
}
//console.log(corola)
const corola = new carro()
console.log(corola.getVelAtual())
corola.velMax = 220
corola.setAceleracao(105)
console.nome = "corola"
corola.setAcelerar()
corola.setAcelerar()
console.log(corola.getVelAtual())






//console.log(fusca)
const fusca = new carro()
console.log(typeof fusca, typeof new carro)
console.log(fusca.getVelAtual())
fusca.velMax = 90
fusca.setAceleracao(105)
console.nome = "fusca"
fusca.setAcelerar()
fusca.setAcelerar()
console.log(fusca.getVelAtual())