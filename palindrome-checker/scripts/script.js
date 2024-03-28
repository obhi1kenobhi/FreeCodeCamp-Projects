const palindText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultPane = document.getElementById("result");


// function to filter out everything except alphabet characters in the input text
// const wordFilter = (word) => {
//     const filter1 = /[^a-zA-Z0-9]+/ig; // regex to identify which characters are not alphabets
//     const filtered_word = word.value.replace(filter1, "").toLowerCase(); // get the input text as a lowercase spaceless string 
//     return filtered_word;
//     //console.log(filtered_word);
// }

// function to use for checking palindrome
const checkPal = (word) => {
    const original_word = word.value;
    //console.log(original_word);
    const filter1 = /[^a-zA-Z0-9]+/ig; // regex to identify which characters are not alphabets
    const filtered_word = word.value.replace(filter1, "").toLowerCase(); // get the input text as a lowercase spaceless string 
    if(word.value){
        const rev_filtered_word = filtered_word.split("").reverse().join(""); // we will use the string split, reverse, join method here
        palindText.value = ""; // reset the value of the input text field
        //console.log(filtered_word);
        //console.log(rev_filtered_word);
        // console.log((filtered_word === rev_filtered_word) ? `<p>${palindText.value} is a palindrome</p>` : `<p>${palindText.value} is not a palindrome</p>`);
        if(filtered_word === rev_filtered_word){
            //console.log("It is a palindrome!!");
            resultPane.setAttribute("style","display:flex; align-items:center; justify-content:center"); //; color:#088f01
            resultPane.innerHTML = `<span><span id="bolding">${original_word}</span> is a palindrome</span>`;
        }
        else {
            //console.log("It is not a palindrome!!");
            resultPane.setAttribute("style","display:flex; align-items:center; justify-content:center"); // ; color:#de0202
            resultPane.innerHTML = `<span><span id="bolding">${original_word}</span> is not a palindrome</span>`;
        }
    }
    else {
        alert("Please input a value");
    }
};

checkBtn.addEventListener("click", () => {checkPal(palindText)});
