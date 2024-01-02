const quotesArray = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
];

const randomBtn = document.getElementById("randomBtn");
let count = 1;
randomBtn.addEventListener("click", () => {
    createQuoteIndex();
    const Totalcount = document.getElementById('count');
    // console.log(`the count is :${count++}`);
    Totalcount.innerHTML = `The button has clicked :${count++} times.`
});

function createQuoteIndex(){
    const randomQuote = Math.floor(Math.random() * quotesArray.length);
    const randomIndex = quotesArray[randomQuote];
    addTheQuotesInsideContainer(randomIndex);
}

function addTheQuotesInsideContainer(index){
    const quoteContainer = document.getElementById("quoteContainer");
    quoteContainer.innerHTML = '';
    const createDiv = document.createElement('div'); // creating a div for append inside the container.
    createDiv.innerHTML = index;
    quoteContainer.appendChild(createDiv);
}




/* summery

// ami jadi direct append koratam randomIndex take tahole append hoto na karon append korte hole akta node hote hobe..appendChild er name ei lukiye ache child gulo e append koro. r append child akta HTML element ke Append kore,,tai quotesArray ta kono html element chilo na tai age html element er vatore dhokalam.then ami append korte parlam.
*/