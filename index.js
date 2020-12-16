document.addEventListener('DOMContentLoaded',function () {
    const todos = [];
    const $todoList = $('#todo-list');
    const $todoForm = $('#todo-form');

    function addItem(todoInputName){
        const formData = new FormData(this);
        const todoItem = {
            Status: false,
            Id: Math.random(),
            Text: formData.get(todoInputName),
        }
        todos.push(todoItem);
    }

    function getTodoHTMLList(todoList){
        return todoList.map(todoItem => `<li>${todoItem.Text}</li>`).join('');
    }
    // renderTodos(todos) =>

    $todoForm.on('submit', function(event) {
        event.preventDefault();
        addItem.call(this,'todo-text');
        this.reset();
        $todoList.html(getTodoHTMLList(todos));
    });
});