const user = {
  name: 'Ricardo',
  surname: 'Camacho',
  age: 32,
  address: {
    city: 'Belém',
    state: 'Pará',
    country: 'Brasil'
  }
};

const arr = ['apple', 1, 'orange', 3, 'strawberry'];

console.log(user);
console.log(arr);

// Para recuperar como variáveis o conteúdo de um objeto ou array, ao invés de escrever

/*const name = usuario.name;
const age = usuario.age;
const city = usuario.address.city;*/

// é possível desestruturar um objeto ou array fazendo

const { name, age, address: { city, ...restUser } } = user;

const [ a, b, ...c ] = arr;

console.log(name, age, city);
console.log(restUser);
console.log(a, b);
console.log(c);

// aplicando o mesmo conceito a parâmetros de funções

// ao invés de 

function showUser1(input) {
  console.log( input.name, input.age );
}
showUser1(user);

// podemos usar

function showUser2( { surname, age } ) {
  console.log( surname, age );
}
showUser2(user);

// aplicando rest operators em parâmetros de funções
function showUser3( { name, surname, ...params } ) {
  console.log( name, surname );
  console.log( params );
}
showUser3(user);

function showArr1( [ a, b, ...others ] ) {
  console.log(a);
  console.log(b);
  console.log(others);
}
showArr1( [2,3,5,7,11,13,17,19] );


// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const user2 = { ...user, name: 'Marcelo' };
console.log(user2);