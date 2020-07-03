// map
const arr = [1, 3, 4, 5, 8, 9];
const newArr = arr.map( (item, index) => item + index );
console.log(newArr);

// reduce
const sum = arr.reduce( (total, next) => total + next );
console.log(sum);

// filter
const filter = arr.filter( (item) => item % 2 === 0 );
console.log(filter);

// find
const find = arr.find( (item) => item * 2 === 16 );
console.log(find);
