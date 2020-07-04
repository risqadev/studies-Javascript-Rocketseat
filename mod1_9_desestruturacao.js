const usuario = {
  nome: 'Ricardo',
  idade: 32,
  endereco: {
    cidade: 'Belém',
    estado: 'PA'
  }
};

console.log(usuario);

// Para recuperar como variáveis o conteúdo de um objeto, ao invés de escrever

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;*/

// é possível desestruturar um objeto fazendo

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);

// aplicando o mesmo conceito a parâmetros de funções

// ao invés de 

function mostraNome1(input) {
  console.log( input.nome, input.idade );
}
mostraNome1(usuario);

// podemos usar

function mostraNome2( { nome, idade } ) {
  console.log( nome, idade );
}

mostraNome2(usuario);