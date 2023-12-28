const inputField = document.getElementById('inputField');
const todobutton = document.getElementById('todobutton');
const todoItems = document.getElementById('todoItems');
const clearAll = document.getElementById('clearAll');
const darkLightMode = document.querySelector('#darkLightMode i');
const showHide = document.getElementById('showHide');
const sup = document.getElementById('sup');

todobutton.addEventListener('click',()=>{
    addToDoItems();
})

clearAll.addEventListener('click',()=>{
    removeTheData();
    // sup.innerHTML = itemsTaken.length
    sup.innerHTML = 0;
})
todoItems.addEventListener('click',(event)=>{
    markRemoveItemsFromToDoList(event)
    
})
// const itemsTaken = [];

function addToDoItems(){
    const inputField = document.getElementById('inputField').value;
   if(inputField === ""){
    alert('Please add some to do!')
   }
   else{


    // createing a li tag for holding the data and buttons.
    const createLi = document.createElement('li');
    createLi.classList.add('liStyle');
    createLi.innerHTML = `${inputField}`;
    todoItems.appendChild(createLi);
    document.getElementById('inputField').value = ''; // for removing the to do after adding

    // creating the mark button.
    const createMarkBtn = document.createElement('button');
    createMarkBtn.innerHTML = `Mark`;
    createMarkBtn.classList.add('markStyle')
    createLi.appendChild(createMarkBtn);

    // creating the delete button.
    const createDeleteBtn = document.createElement('button');
    createDeleteBtn.innerHTML = `Delete`;
    createDeleteBtn.classList.add('dltStyle')
    createLi.appendChild(createDeleteBtn);


    // itemsTaken.push([...todoItems.children]);
    // sup.innerHTML = itemsTaken.length;   // ata korbo na.

    sup.innerHTML = todoItems.children.length; // at right. 
   }
   addTaskToLocalStorage()
}



function removeTheData(){
    todoItems.innerHTML = '';
}

function markRemoveItemsFromToDoList(e){
    const targetItem = e.target.parentElement;
    if(e.target.textContent === 'Mark'){
        targetItem.classList.toggle('lineThrough')
        
    }
    else if(e.target.textContent === 'Delete'){
        targetItem.remove();
        // itemsTaken.pop();
        // sup.innerHTML = itemsTaken.length; // ata korbo na.

        sup.innerHTML = todoItems.children.length; //ata right.
    }   
}


darkLightMode.addEventListener('click',()=>{
    // console.log('c');
    document.getElementById('container').classList.toggle('background');
    todoItems.style.border = 'solid 1px #fff';
})

showHide.addEventListener('click',()=>{
    todoItems.classList.toggle('showHideTodoContainer');
})


// local storage.
function addTaskToLocalStorage(){
    try{
        localStorage.setItem('todoItems',todoItems.innerHTML);
    }
    catch(error){
        console.log(
            "error while saving the data to the local storage:",
            error
        )
    }
}
function showTask(){
    todoItems.innerHTML = localStorage.getItem('todoItems')
}
showTask()

// ... (your existing code)

document.addEventListener('DOMContentLoaded', () => {
    showTask();
});



/*
summery :

sup.innerHTML++
ata ami upore use korechilam.but issue ata holo j ,,ai kaj ta korle amr sudhu innerHTML tai update krobe..mane ami html a jai value (mane 0) dye rakhechilam setai update hobe..edike amader todoitems a jotoi value thakuk na kano..tai ata ekhane use kora uchi na.


ami ekhane rodo items theke data nabo niye sup er count ta update korbo tai todoitems er length ta jana khub dorkar..r ekhane sei length diyei ai kaj ta korlam..jata holo 
*/