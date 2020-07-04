// map
const arr = [1, 3, 4, 5, 8, 9];

const mapArr = arr.map( item => item * 2 );
console.log(mapArr);

const mapArr2 = arr.map( (item, index) => item + index );
console.log(mapArr2);

// reduce
const sum = arr.reduce( (total, next) => total + next );
console.log(sum);

// filter
const filter = arr.filter( (item) => item % 2 === 0 );
console.log(filter);

// find
const find = arr.find( (item) => item * 2 === 16 );
console.log(find);


// atribuindo arrow function a uma variável

// strings, numeros, arrays, booleanos podem ser retornados diretamente depois da seta
const testString = () => "Ricardo";
console.log( testString() );

const testNumber = () => 5;
console.log( testNumber() );

const testArray = () => [ 'pão', 'queijo', 2, true ];
console.log( testArray() );

const testBoolean = () => false;
console.log( testBoolean() );

// objetos precisam de, pelo menos um parêntese ao redor porque a chave tbm serve pra delimitar o escopo da função
const testObject = () => ({ "name": "Ricardo" });
console.log( testObject() );

// definindo valores padrões para parâmetros, caso não sejam passados explicitamente
const sumDefValues = ( a = 3, b = 6 ) => a + b;
console.log( sumDefValues() ); // 9
console.log( sumDefValues(1) ); // 7
