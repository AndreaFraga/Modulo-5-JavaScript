const pessoa = {
    nome: "Andréa",
    idade: 39,
    cidade: "Rio de Janeiro"
}

// Notação de ponto

console.log(pessoa.nome) //Andréa

//Notação de colchetes

console.log(pessoa['idade']) //39

//Como desestruturar objetos

const { nome, idade, cidade } = pessoa

console.log(nome) //Andréa
console.log(idade) //39
console.log(cidade) //Rio de Janeiro
