// 2º exercício
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

// 2.1 - map
let idades = usuarios.map( item =>  item.idade );
console.log(idades);

// 2.2 - filter
let rocketseat = usuarios.filter( item => item.empresa === 'Rocketseat' && item.idade > 18 );
console.log(rocketseat);

// 2.3 - find
let google = usuarios.filter( item => item.empresa === 'Google' );
console.log(google);

// 2.4 - cascading
let merge = usuarios
  .map( item => {
    item.idade *= 2;
    return item;
  } )
  .filter( item => item.idade <= 50 );
console.log(merge);