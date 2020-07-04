// importa seletivamente
/*import { sum, prod } from './functions';
  console.log(sum(1, 0));
  console.log(prod(2, 1));
  console.log(sub(1, 2)); // irá falhar pois não foi importada */

// importa só o default
/*import sum from './functionsWithDefault';
  console.log(sum(5, 4));*/

// importa a default e as demais seletivamente
/*import sum, { sub, div } from './functionsWithDefault';
  console.log(sum(1, 2));
  console.log(sub(4, 2));
  console.log(div(10, 2));
  console.log(prod(2, 3)); // irá falhar pois não foi importada */

// importar com outro nome
/*import sumFunction, { sub as subFunction, prod as prodFunction } from './functionsWithDefault';
  console.log(sumFunction(9, 4));
  console.log(subFunction(9, 4));
  console.log(prodFunction(9, 4));*/

// importar tudo como um objeto
import * as functions from './functions';
  console.log(functions);
  console.log( functions.sum(7, 3) );
