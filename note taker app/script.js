const noteButton = document.getElementById('noteButton');
const noteList = document.getElementById('noteList');
const totalNotes = document.querySelector('.totalNotes');
const filter_input = document.getElementById('filter_input');
const filter_search = document.getElementById('filter_search');

// Event listener for adding a new note
noteButton.addEventListener('click', () => {
    const noteField = document.getElementById('noteField').value;
    if (noteField === '') {
        alert('Please write some notes in the input field!');
    } else {
        addItemsToNoteList(noteField);
    }
});

// Function to add a new note
const addItemsToNoteList = (noteTextValue) => {
    document.getElementById('noteField').value = ''; // replacing the text with a blank string.

    const createLiEle = document.createElement('div');
    createLiEle.classList.add('noteCard'); // add some style to the note card.

    // creating h3 tag for heading.
    const createH3 = document.createElement('h3');
    createH3.style.color = 'black';
    createH3.innerHTML = `Note :${noteList.children.length + 1}`;

    // creating p tag for text.
    const textIndivFromInput = document.createElement('h2');
    textIndivFromInput.innerHTML = noteTextValue;

    // creating the view note button.
    const createViewNoteBtn = document.createElement('button');
    createViewNoteBtn.innerHTML = 'View Note';
    createViewNoteBtn.classList.add('viewNoteBtn');
    createViewNoteBtn.style.marginBottom = '0.6rem';

    // creating the delete note button.
    const createDeleteNoteBtn = document.createElement('button');
    createDeleteNoteBtn.innerHTML = 'Delete Note';
    createDeleteNoteBtn.classList.add('deleteNoteBtn');

    // adding the event for viewing text.
    createViewNoteBtn.addEventListener('click', () => {
        viewNoteForRead(createLiEle, noteTextValue);
    });

    // adding the event for deleting the element.
    createDeleteNoteBtn.addEventListener('click', () => {
        createLiEle.remove();
        updateTotalNotes();
    });

    // appending elements inside the note list.
    createLiEle.appendChild(createH3);
    createLiEle.appendChild(textIndivFromInput);
    createLiEle.appendChild(createViewNoteBtn);
    createLiEle.appendChild(createDeleteNoteBtn);
    noteList.appendChild(createLiEle);

    updateTotalNotes();
};

// Function for viewing a note
const viewNoteForRead = (outerCard, text) => {
    const createDivInsideNoteCard = document.createElement('div');
    createDivInsideNoteCard.classList.add('divInsideTheCard');

    const crossBtn = document.createElement('div');
    crossBtn.classList.add('crossBtn');
    crossBtn.innerHTML = `<i class="fa-solid fa-square-xmark"></i>`;
    crossBtn.addEventListener('click', () => createDivInsideNoteCard.remove());
    createDivInsideNoteCard.appendChild(crossBtn);

    const textInsideNoteCard = document.createElement('h3');
    textInsideNoteCard.innerHTML = `${text}`;
    createDivInsideNoteCard.appendChild(textInsideNoteCard);

    outerCard.appendChild(createDivInsideNoteCard);
};

// Function to update the total notes count
const updateTotalNotes = () => {
    totalNotes.innerHTML = `Total: ${noteList.children.length} notes are available.`;
};

// Function to reattach event listeners
const reattachEventListeners = () => {
    const viewNoteButtons = document.querySelectorAll('.viewNoteBtn');
    const deleteNoteButtons = document.querySelectorAll('.deleteNoteBtn');

    viewNoteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const anotherNoteCard = button.closest('.noteCard');
            const noteTextValue = anotherNoteCard.querySelector('h2:not(.divInsideTheCard)').innerHTML;
            viewNoteForRead(anotherNoteCard, noteTextValue);
        });
    });

    deleteNoteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const noteCard = button.closest('.noteCard');
            noteCard.remove();
            updateTotalNotes();
        });
    });
};

// Event listener for filtering notes
filter_search.addEventListener('click', () => {
    const searchValue = filter_input.value.toLowerCase();
    const filteredItems = Array.from(noteList.children).filter((note) => {
        return note.innerHTML.toLowerCase().includes(searchValue);
    });

    noteList.innerHTML = ''; // Clear the current noteList

    if (filteredItems.length > 0) {
        // If there are search results, add each matching note card back to the noteList
        filteredItems.forEach((note) => {
            noteList.appendChild(note.cloneNode(true)); // puro noteCard take clone korlo.jadi clone na kprtam tahole suru theke same banate hoto .
        });
        reattachEventListeners(); // clone korleo kaj korchilo na viewNoteBtn ta tai ai function ta create kora holo.
    } else {
        // If no results found, display a message or handle it as needed
        noteList.innerHTML = 'No matching notes found.';
    }

    updateTotalNotes();
});

// Event listener to clear all notes
const clearAllButton = document.querySelector('.clear_all');
clearAllButton.addEventListener('click', () => {
    noteList.innerHTML = '';
    updateTotalNotes();
});


// reattach function ta bujhte hobe ...


// jakhn amra normal add note korchi tokhon akta notecard add hoche..r sekhaneo view notebtn ta kaj korche note porar jonno..but jakhn ami search kore sei note tale anchi tokhn view noteBtn ta kaj korche na.setake kaj korarnor jonno ami reattachEventListeners function ta likhchi..r sekha viewNote button ta kaj kroche.

// seta clone hoye asche ..then  viewNoteBtn er modhe click hole akta reattach function run hoche..jekhane r akta anotherCard ready hoche...agei ready chilo jst functoin take call korlam r sei call a argument dilam j text take ami target korechilm...

// mane agei ami akbar sei function take call korechilam..abar dorkar porlo tai abar cal korlam r notun argument dilam.

// jakhn filer korar por view button a click korlam dakhlm kaj korchena.tai reattach banano holo jekhane ager theke ready funciotn ta call holo..age outer mane createLi mane main notecard a dhukche..r akhn ota clone note vcard a dhukche.