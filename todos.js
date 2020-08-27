var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos(){
    listElement.innerHTML = ''

    for (todo of toDos) {
    //create elements - "li" and "a" 
    var toDoElement = document.createElement('li')
    
    var linkElement = document.createElement('a')
    var linkText = document.createTextNode('Excluir')
    linkElement.appendChild(linkText)
    linkElement.setAttribute('href', '#')
    
    //saving the position of each element in array
    var position = toDos.indexOf(todo)

    //call the function to delete when the click on element "a" happens
    linkElement.setAttribute('onclick', 'deleteToDo(' + position + ')')


    //get the texts of array
    var toDoText = document.createTextNode(todo)

    //add texts and element "a" to "li" and the "li" to "ul"
    toDoElement.appendChild(toDoText)
    toDoElement.appendChild(linkElement)
    listElement.appendChild(toDoElement)

    
    }
}

renderToDos()

function addToDo (){
    //get the value of the input and add to the array 
    var toDoText = inputElement.value
    toDos.push(toDoText)
    
    //reset input
    inputElement.value = ''
    renderToDos()
    saveToStorage()
}

buttonElement.onclick = addToDo

function deleteToDo(position){
    toDos.splice(position, 1)
    renderToDos()
    saveToStorage()
}

//save the toDo data in the local storage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(toDos));
}