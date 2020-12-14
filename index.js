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

    function buildHTMLList(){
        for(i = 0;i < todos.length;i++)
         {
            outList.push(`<li>${todos.Text[i]}</li>`);
         }
        const innerValue = outList.join('\n');
        const result = `<ul>${innerValue}</ul>`;
        return result;
    }

    $todoForm.on('submit', function(event) {
        event.preventDefault();
        addItem.call(this,'todo-text');
        buildHTMLList();
    });
});