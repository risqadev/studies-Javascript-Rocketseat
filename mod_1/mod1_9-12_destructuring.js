const user1 = {
  name: 'Ricardo',
  surname: 'Camacho',
  age: 32,
  address: {
    city: 'Belém',
    state: 'Pará',
    country: 'Brasil'
  }
};
  console.log(user1);

const arr = ['apple', 1, 'orange', 3, 'strawberry'];
  console.log(arr);

// Para recuperar como variáveis o conteúdo de um objeto ou array, ao invés de escrever

const name1 = user1.name;
const age1 = user1.age;
const city1 = user1.address.city;
  console.log(name1, age1, city1);

// DESTRUCTURING & REST OPERATOR
const [ a, b, ...c ] = arr;
  console.log(a, b);
  console.log(c);

const { name: name2, age: age2, address: { city: city2, ...restUser2 } } = user1;
  console.log(name2, age2, city2);
  console.log(restUser2);

// OBJECT SHORT SYNTAX
const { name, age, address: { city, ...restUser } } = user1;
  console.log(name, age, city);
  console.log(restUser);

// ou ao invés de
const user2 = {
  name: name,
  age: age,
  company: 'UFPA'
}
  console.log(user2);

// é possível (quando propriedade e variável tem o mesmo nome)
const user3 = {
  name,
  age,
  company: 'UFPA'
}
  console.log(user3);


// NO CASO DE FUNÇÕES

// ao invés de 
function showUser1(input) {
  console.log( input.name, input.age );
}
  showUser1(user1);

// podemos usar
function showUser2( { surname, age } ) {
  console.log( surname, age );
}
  showUser2(user1);

// aplicando rest operators em parâmetros de funções
function showUser3( { name, surname, ...params } ) {
  console.log( name, surname );
  console.log( params );
}
  showUser3(user1);

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

const user4 = { ...user1, name: 'Marcelo' };
console.log(user4);


// TEMPLATE LITERALS

console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);