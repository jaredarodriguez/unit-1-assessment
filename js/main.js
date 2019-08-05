/*----- app's state (variables) -----*/
let total = 0;
/*----- cached element references -----*/
var displayEl = document.querySelector('h1');
var inputEl = document.querySelector ('input');


/*----- event listeners -----*/

document.getElementById("add-btn").addEventListener('click', function(){
    total += parseFloat(inputEl.value)
    inputEl.value = '';
    render();
});

document.getElementById("subtract-btn").addEventListener('click', function(){
    total -= parseFloat(inputEl.value)
    inputEl.value = '';
    render();
})


/*----- functions -----*/
function render() {
    displayEl.innerText = total;
}

render()


