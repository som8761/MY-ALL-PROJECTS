const vowelBtn = document.getElementById('vowelBtn');
const list = document.getElementById('list');
const countOfVowelCheck = document.querySelector('.countOfVowelCheck');

vowelBtn.addEventListener('click',()=>{
    checkVowel();
})

let count = 1;
const checkVowel = () =>{
    const vowelInput = document.getElementById('vowelInput').value;
    let vowel = /[aeiou]/gi;
    let vowelCheck = vowelInput.match(vowel);

    if(vowelCheck){
        list.innerHTML = `The vowels are : ${vowelCheck} & vowel Length is : ${vowelCheck.length}`;
        countOfVowelCheck.innerHTML = `${count++} times vowel has checked`;
    }
    else if(vowelInput === ''){
        list.innerHTML = 'please enter some text to check wether that is vowel or not!'
    }
    else{
        list.innerHTML = 'no vowels found!'
    }

    document.getElementById('vowelInput').value = '';
}