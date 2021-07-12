const alunasGama = ['Maria Clara', 'Andréa', 'Aline', 'Laís']

//Acessar informações num array
console.log(alunasGama[3]) //'Aline'

//Operador spread (...)
const alunasXp = [...alunasGama, 'Joanna']

console.log(alunasXp)

//Métodos de iteração: 
//map
alunasXp.map(aluna => console.log(aluna))

//filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)

//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1,34,35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
},5)

console.log(soma) //75