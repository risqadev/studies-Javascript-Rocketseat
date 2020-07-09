// EXEMPLO 1
class TodoList1 {
  constructor() {
    this.todos = [];
    this.count = 1; // add por mim, mas não deve ser a melhor forma de fazer isso
  }
  addTodo() {
    this.todos.push(`Item ${this.count}, ex.1`);
    this.count++;
    console.log(this.todos);
  }
}
// instanciando a classe em uma variável
const myList1 = new TodoList1();
// chamando o método com o botão
document.getElementById('newtodo1').onclick = () => myList1.addTodo();

// EXEMPLO 2 - extends
class List2 {
  constructor() {
    this.data = [];
    this.count = 1; // add por mim, mas não deve ser a melhor forma de fazer isso
  }

  add(info) {
    this.data.push(`${info} ${this.count}, ex.2`);
    this.count++;
    console.log(this.data);
  }
}

class TodoList2 extends List2 {
  constructor() {
    super();

    this.user = 'Ricardo, ex.2';
  }

  showUser() {
    console.log(this.user);
  }
}
// instanciando a classe em uma variável
const myList2 = new TodoList2();
// chamando o método com o botão
document.getElementById('newtodo2').onclick = () => myList2.add('Item');

myList2.showUser();

// EXEMPLO 3
class TodoList3 {
  constructor() {
    this.todos = [];
  }

  // métodos estáticos não  conseguem acessar outras informações da classe
  static addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}
TodoList3.addTodo(); // irá falhar, pois não consegue acessar this.todos

// EXEMPLO 4
// o exemplo abaixo irá funcionar normalmente, pois não depende de nenhuma outra propriedade do objeto, somente dos parâmetros passados.
class Matematica {
  static soma(a, b) {
    return a + b;
  }
}
console.log(Matematica.soma(1, 2));