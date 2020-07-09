let inputElement = document.querySelector('.container input');
let buttonElement = document.querySelector('.container button');
let containerElement = document.querySelector('.container');
let listElement = document.querySelector('.container ul');

/*console.log(inputElement);
console.log(buttonElement);*/

let renderListRepos = () => {
  let username = inputElement.value;
  // let username = 'rscamacho';

  listElement.innerHTML = '<li>Carregando...</li>';

  axios.get(`https://api.github.com/users/${username}/repos`)
    .then( (response) => {
      listElement.innerHTML = '';

      for( repo of response.data) {
        let pos = response.data.indexOf(repo);

        listElement.appendChild(document.createElement('li'));

        let itemElement = document.getElementsByTagName('li')[pos];
        let repoName = document.createTextNode(repo.name);

        itemElement.appendChild(repoName);
      }
    })
    .catch( (error) => {
      if (error.response.status === 404) {
        listElement.innerHTML = '<li>Usuário não encontrado (404)</li>';
      } else {
        listElement.innerHTML = '<li>Ocorreu um erro.</li>';
      }
    });
}