const palindText = document.getElementById("palin-text");
const checkBtn = document.getElementById("submit-button");


// function to filter out everything except alphabet characters in the input text
const wordFilter = (word) => {
    const filter1 = /[^a-zA-Z]+/ig;
    const text_to_filter = word.value;
    console.log(text_to_filter);
    const filtered = text_to_filter.replace(filter1, "").toLowerCase();
    console.log(filtered);
}

const checkPal = () => {
    // TODO: use for checking palindrome
};

checkBtn.addEventListener("click", () => {wordFilter(palindText)});
