//document.getElementById('count-el').innerText=5
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-El') // to get the id of the button 
console.log(countEl); 


let count = 0 // to strat the count from zero 
// Increment function 
function increment(){
    count = count +1 
    countEl.innerText=count
}

function save(){
    countStr = count + " - ";
    saveEl.innerText += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}


