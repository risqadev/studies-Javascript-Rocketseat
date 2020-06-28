let inputElement = document.querySelector('.container input');
let buttonElement = document.querySelector('.container button');
let containerElement = document.querySelector('.container');
let listElement = document.querySelector('.container ul');

/*console.log(inputElement);
console.log(buttonElement);*/

let renderListRepos = () => {
  let username = inputElement.value;
  listElement.innerHTML = '';

  axios.get(`https://api.github.com/users/${username}/repos`)
    .then( (response) => {
      for( repo of response.data) {
        let pos = response.data.indexOf(repo);

        listElement.appendChild(document.createElement('li'));

        let itemElement = document.getElementsByTagName('li')[pos];
        let repoName = document.createTextNode(repo.name);

        itemElement.appendChild(repoName);
      }
    } )
    .catch( (error) => console.log(error) );
}