let count = 0;

function increment() {
    count= count + 1;
    document.querySelector("#count").textContent= count;
}

function save() {
    
    let previousAdd = count + " - ";
 
    let newCount = document.querySelector("#save").textContent += previousAdd;
    count=0;
    document.querySelector("#count").textContent= count;
    
}