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

//function to add entry based on the time of day
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); // template literal format used here
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1; //querySelectorAll returns all occurences of the passed parameter 
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;                        // HTML string which takes entry of the calorie intake
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString); //insertAdjacentHTML function uses two arguments - 1st is the position where to insert the HTML, 
                                                                      // 2nd is to insert the HTML itself
  }

  addEntryButton.addEventListener("click", addEntry); // Event Listener to listen to the click event of addEntryButton