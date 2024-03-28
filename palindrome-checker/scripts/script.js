const palindText = document.getElementById("palin-text");
const checkBtn = document.getElementById("submit-button");


// function to filter out everything except alphabet characters in the input text
const wordFilter = (word) => {
    const filter1 = /[^a-zA-Z]+/ig;
    const filtered_word = word.value.replace(filter1, "").toLowerCase();
    return filtered_word;
    //console.log(filtered_word);
}

// function to use for checking palindrome
const checkPal = () => {
    const checkWord = wordFilter(palindText);
    const revCheckWord = checkWord.split("").reverse().join(""); // we will use the string split, reverse, join method here
    //console.log(checkWord);
    //console.log(revCheckWord);
    if(checkWord === revCheckWord){
        console.log("It is a palindrome!!");
    }
    else {
        console.log("It is not a palindrome!!");
    }
};

checkBtn.addEventListener("click", checkPal);
