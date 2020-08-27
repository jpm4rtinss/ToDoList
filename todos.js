var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')
var toDos = [
    'Estudar Angular Js',
    'Estudar prototipação Adobe XD',
    'Estudar React'
]

function renderToDos(){
    for (todo of toDos) {
    //create li element
    var toDoElement = document.createElement('li')
    //get the texts of array
    var toDoText = document.createTextNode(todo)
    //add texts to the li and the li to the ul
    toDoElement.appendChild(toDoText)
    listElement.appendChild(toDoElement)

    
    }
}
renderToDos()

function addToDo (){
    var toDoText = 
}