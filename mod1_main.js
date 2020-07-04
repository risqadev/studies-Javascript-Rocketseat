class TodoList {
  constructor() {
    this.todos = [];
  }

  // métodos estáticos não conseguem acessar outras informações da classe
  static addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

TodoList.addTodo(); // irá falhar, pois não consegue acessar this.todos

// o exemplo abaixo irá funcionar normalmente, pois não depende de nenhuma outra propriedade do objeto, somente dos parâmetros passados.
class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));