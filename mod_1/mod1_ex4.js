// 4.1
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

// 4.2
function mostraInfo( { nome, idade } ) {
  return `${nome} tem ${idade} anos.`;
}

console.log(
  mostraInfo( { nome: 'Diego', idade: 23 } )
);

// 5.1
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

// 5.2
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