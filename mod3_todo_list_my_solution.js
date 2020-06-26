let inputElement = document.querySelector('input#insertField');
let buttonElement = document.querySelector('button#insertButton');

let ulElement = document.querySelector('ul#todoList');

buttonElement.onclick = function () {
    let insertText = document.createTextNode(inputElement.value);
    //console.log(insertText);
    let removeButton = document.createElement('a');
    removeButton.setAttribute('href', '#');
    removeButton.setAttribute('onclick', 'removeItem(event)');
    removeButton.style.marginLeft = 20;
    removeButton.appendChild(document.createTextNode('remover'));
//console.log(removeButton);
    let newItem = document.createElement('li');
    newItem.appendChild(insertText);
    newItem.appendChild(removeButton);
    ulElement.appendChild(newItem);
}

function removeItem(event) {
    let itemToRemove = event.target.parentElement;
    ulElement.removeChild(itemToRemove);
}

//console.log(inputElement);
//console.log(buttonElement);
//console.log(ulElement);
