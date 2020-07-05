const myPromise1 = () => new Promise( (resolve, reject) => {
  setTimeout( () => { resolve('OK') } , 1000);
});

/*myPromise1()
  .then( response => {
    console.log('myPromise1 resolved: ' + response);
  })
  .catch( err => {
    console.log('myPromise1 error: ' + err);
  }); */

async function execPromise1() {
  console.log('execPromise1() started');

  const response = await myPromise1();
    console.log(response);
  
  console.log(await myPromise1());
  console.log(await myPromise1());
  console.log('Go ahead? No.');
  console.log(await myPromise1());

  console.log('execPromise1() completed');
}
execPromise1();

// sem async/await ela não espera a conclusão da promise e irá retornar antes de execPromise1, mesmo tendo sido chamada depois
function execPromise2() {
  console.log('execPromise2() started');

  const response = myPromise1();
  console.log(response);

  console.log('execPromise2() completed');
}
execPromise2();

// essa função também retornará antes
const anotherFunction = () => console.log('Another function.');
anotherFunction();