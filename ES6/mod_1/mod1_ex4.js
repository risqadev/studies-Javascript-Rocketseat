// 4.1 - Destructuring
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2 - Destructuring
function mostraInfo( { nome, idade } ) {
  return `${nome} tem ${idade} anos.`;
}

console.log(
  mostraInfo( { nome: 'Diego', idade: 23 } )
);

// 5.1 - Rest operator
const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x);
console.log(y);

function soma(a, ...arr) {
  if (arr.length > 0) {
    a += soma(...arr);
  }
  return a;
}
console.log( soma(1, 2, 3, 4, 5, 6) );
console.log( soma(1, 2) );

// 5.2 - Spread operator
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

let usuario2 = {...usuario, nome: 'Gabriel' };
console.log(usuario2);

let usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'} };
console.log(usuario3);

// 6 - Template Literals
const usuario6 = "Diego";
const idade6 = 23;

console.log(`O usuário ${usuario6} possui ${idade6} anos.`);

// 7 - Object Short Syntax
const nome7 = 'Diego';
const idade7 = 23;

const usuario7 = {
  nome7,
  idade7,
  cidade7: 'Rio do Sul'
}
console.log(usuario7);