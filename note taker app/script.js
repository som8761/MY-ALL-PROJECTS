// const noteField = document.getElementById('noteField');
const noteButton = document.getElementById('noteButton');
const noteList = document.getElementById('noteList');
const totalNotes = document.querySelector('.totalNotes');

noteButton.addEventListener('click',()=>{
    const noteField = document.getElementById('noteField').value;
    if(noteField === ''){
        alert('please write some notes in th einput field!')
    }
    else{
        addItemsToNoteList(noteField);
        // console.log('dd');
    }
})
const addItemsToNoteList = (noteTextValue) =>{
    noteField.value = ''; // replacing the text with blank string.

    const createLiEle = document.createElement('div');
    createLiEle.classList.add('noteCard'); // add some style in the first box.
    
    // creating h3 tag for heading.
    const createH3 = document.createElement('h3');
    createH3.style.color = 'black'
    createH3.innerHTML = `Note :${noteList.children.length + 1}`;
    
    // creating p tag for text .
    const textIndivFrominput = document.createElement('h3');
    textIndivFrominput.innerHTML = noteTextValue;
    
    // creating the view note button.
    const createViewNoteBtn = document.createElement('button');
    createViewNoteBtn.innerHTML = 'view Note';
    createViewNoteBtn.style.marginBottom = '0.6rem';
    
    const createDeleteNoteBtn = document.createElement('button');
    createDeleteNoteBtn.innerHTML = 'Delete Note';

    createViewNoteBtn.addEventListener('click',()=>{
        viewNoteForRead(createLiEle,noteTextValue);
    })
    createDeleteNoteBtn.addEventListener('click',()=>{
        createLiEle.remove();
        totalNotes.innerHTML = `Total: ${noteList.children.length} notes are available.`;
    })

    // appending elements inside the note list.
    createLiEle.appendChild(createH3);
    createLiEle.appendChild(textIndivFrominput);
    createLiEle.appendChild(createViewNoteBtn);
    createLiEle.appendChild(createDeleteNoteBtn);
    noteList.appendChild(createLiEle);

    totalNotes.innerHTML = `Total: ${noteList.children.length} notes are available.`;
}

const viewNoteForRead = (outerCard,text) => {
    const createDivInsideNoteCard = document.createElement('div');
    createDivInsideNoteCard.classList.add('divInsideTheCard');

    const crossBtn = document.createElement('div');
    crossBtn.classList.add('crossBtn')
    crossBtn.innerHTML =  `<i class="fa-solid fa-square-xmark"></i>`;
    crossBtn.addEventListener('click',()=> createDivInsideNoteCard.remove())
    createDivInsideNoteCard.appendChild(crossBtn);

    const textInsidNoteCard = document.createElement('h3');
    textInsidNoteCard.innerHTML = `${text}`;
    createDivInsideNoteCard.appendChild(textInsidNoteCard);

    outerCard.appendChild(createDivInsideNoteCard);
}

const clear_all = document.querySelector('.clear_all');
clear_all.addEventListener('click',()=>{
    noteList.innerHTML = '';
    totalNotes.innerHTML = `Total: ${noteList.children.length} notes are available.`;
})

