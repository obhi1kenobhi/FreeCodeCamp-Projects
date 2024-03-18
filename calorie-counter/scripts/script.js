const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

// function to check numbers using regex
function cleanInputString(str) {
    const regex = /[+-\s]/g; // /<exp>/ - regex expression to check; [abcxyz] - wrapper of a character class which searches for any no. of symbols within the class; 
                             // g after the closing slash will tell the pattern to continue looking even after it has found a match
    return str.replace(regex,""); // replace function replaces one string/regex expression with another string
}

// function to filter out exponential notations
function isInvalidInput(str) {
    const regex = /\d+e\d+/i; // i flag is used for insensitive, so both upper and lowercase will be allowed; d flag is used as shorthand for all digits
    return str.match(regex); // match function matches first instance and returns it, or returns an array of all matches if regex is global
}
