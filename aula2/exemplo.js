const notas = [10,1.5,7,8,4.8,6.7,9.9]
console.log(notas.filter((x)=> x >=7))

function maiornota(x){ x >= 7}
const menornota = (y) => y >= 7

console.log(notas.filter(maiornota))
const maioresnotas = notas.filter(maiornota)
console.log(maioresnotas)