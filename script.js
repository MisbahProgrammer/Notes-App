let notesBox = document.querySelector('.notes-box');
let addBtn = document.querySelector('.add');
let notes = document.querySelectorAll('.input-box');
let remove = document.querySelectorAll('.delete');



addBtn.addEventListener('click' , () =>{
    let inputBox = document.createElement('p');
    inputBox.className = 'input-box';
    let btn = document.createElement('button');
    btn.className = 'delete';
    btn.innerText = 'X';
    btn.style.backgroundColor = '#571094';
    btn.style.padding = '5px'
    inputBox.setAttribute('contenteditable' , 'true');
    notesBox.appendChild(inputBox).appendChild(btn)
})

notesBox.addEventListener('click' , function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();
    }
})





