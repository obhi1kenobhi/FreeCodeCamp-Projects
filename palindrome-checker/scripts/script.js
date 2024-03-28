const palindText = document.getElementById("palin-text");
const checkBtn = document.getElementById("submit-button");
const resultPane = document.getElementById("result");


// function to filter out everything except alphabet characters in the input text
const wordFilter = (word) => {
    const filter1 = /[^a-zA-Z]+/ig; // regex to identify which characters are not alphabets
    const filtered_word = word.value.replace(filter1, "").toLowerCase(); // get the input text as a lowercase spaceless string 
    return filtered_word;
    //console.log(filtered_word);
}

// function to use for checking palindrome
const checkPal = () => {
    const checkWord = wordFilter(palindText); // take the word into a variable
    const revCheckWord = checkWord.split("").reverse().join(""); // we will use the string split, reverse, join method here
    palindText.value = ""; // reset the value of the input text field
    //console.log(checkWord);
    //console.log(revCheckWord);
    if(checkWord === revCheckWord){
        //console.log("It is a palindrome!!");
        resultPane.setAttribute("style","display:flex; align-items:center; justify-content:center; color:#088f01")
        resultPane.innerText = `IT IS A PALINDROME`;
    }
    else {
        //console.log("It is not a palindrome!!");
        resultPane.setAttribute("style","display:flex; align-items:center; justify-content:center; color:#de0202")
        resultPane.innerText = `IT IS NOT A PALINDROME`;
    }
};

checkBtn.addEventListener("click", checkPal);
