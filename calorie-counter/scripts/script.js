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
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1; //querySelectorAll returns all occurences of the passed parameter as a NodeList. A NodeList is a list of elements like an array. It contains the elements that match the query selector.  
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;                        // HTML string which takes entry of the calorie intake, using the template literal format
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString); //insertAdjacentHTML function uses two arguments - 1st is the position where to insert the HTML, 
                                                                      // 2nd is to insert the HTML itself
  }

function calculateCalories(e) {
  e.preventDefault(); // The preventDefault() method cancels the event if it is cancelable, meaning that form data will not be submitted.
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs); 
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]); // since budgetNumberInputs is not a list item in itself, it is made a list by wrapping it in []

  if (isError) { // used to check whether global error flag returns as true - i.e. iinvalid input in budgetNumberInput
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit'; // single-line ternary operator which functions as an if-else statement
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `; // template literal format used here too

  output.classList.remove('hide');
}

// function to collect all calories from inputs, add them and return them 
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) { // for..of loop to iterate through each item of the iterable 
    const currVal = cleanInputString(item.value);  // cleans the string of symbols and spaces - previously defined
    const invalidInputMatch = isInvalidInput(currVal); // checks whether the string is a valid one or not - previously defined

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    } // if the input is invalid, set isError flag to true and return null
    calories += Number(currVal);
  }
  return calories;
}  

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container')); // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.



  for (const container of inputContainers) {
    container.innerHTML = '';
  }

  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide'); // adds the 'hide' class in output when the form is cleared
}



addEntryButton.addEventListener("click", addEntry); // Event Listener to listen to the click event of addEntryButton
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click",clearForm);