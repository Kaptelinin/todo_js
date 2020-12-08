document.addEventListener('DOMContentLoaded',function () {
    const todos = [];
    const $todoForm = $('#todo-form');

    $todoForm.on('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const todoItem = {
            Status: false,
            Id: Math.random(),
            Text: formData.get('todo-text'),
        }
        todos.push(todoItem);
    });
})
