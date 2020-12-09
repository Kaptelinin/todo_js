document.addEventListener('DOMContentLoaded',function () {
    const todos = [];
    const $todoForm = $('#todo-form');

    function addItem(todoInputName){
        const formData = new FormData(this);
        const todoItem = {
            Status: false,
            Id: Math.random(),
            Text: formData.get(todoInputName),
        }
        todos.push(todoItem);
        this.reset();
    }

    $todoForm.on('submit', function(event) {
        event.preventDefault();
        addItem.call(this,'todo-text');
    });
})
