var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/rscamacho');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState ===4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

minhaPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
  
// os nomes dos parâmetros podem ser outros
/*const myPromise2 = () => new Promise( (aRes, aRej) => {
  setTimeout( () => { aRej('Fail') } , 2000);
});

myPromise2()
  .then( resposta => {
    console.log('myPromise2 resolved: ' + resposta);
  })
  .catch( erro => {
    console.log('myPromise2 error: ' + erro);
  }); */
