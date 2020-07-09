// Converte para arrow functions

// 3.1
const arr = [1, 2, 3, 4, 5];

console.log( arr.map( item => item + 10 ) );

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log( mostraIdade(usuario) );

// 3.3
const nome = 'Ricardo';
const idade = 32;

const mostraUsuario = (nome = 'Diego', idade = 23) => ({nome, idade});
console.log( mostraUsuario(nome, idade) );
console.log( mostraUsuario(nome) );

// 3.4
const promise = new Promise( (resolve, reject) => resolve() );

console.log( promise );