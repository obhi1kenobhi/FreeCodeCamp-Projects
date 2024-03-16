// VARIABLE DECLARATION AND INITIALIZATION - ANY DATA TYPE

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"]; // ARRAY DECLARATION

// QUERY SELECTOR - SELECTS FIRST ELEMENT IN HTML DOC BY PARAMETER
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// JS OBJECT ARRAY - OBJECT DEFINED IN CURLY BRACKETS WITH PROPERTIES AS KEY VALUE PAIRS
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// ONCLICK - MAPS FUNCTIONS TO HTML ELEMENTS (NORMALLY BUTTONS) WHICH EXECUTES ON CLICKS
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// FUNCTION DECLARATION AND INITIALIZATION
// update function used for updating the current state of the campaign
function update(location) {
  monsterStats.style.display = "none"; // <element-id>.style.<property> is used to select and edit the CSS properties of the element
  // innerText and innerHTML both select the contents inside the first matched element in the HTML DOM, 
  // but innerText selects only the formatted text part whereas innerHTML returns the HTML plaintext part entirely without formatiing
  button1.innerText = location["button text"][0]; // selects the 1st element of the button text property of the called location object
  button2.innerText = location["button text"][1]; // selects the 2nd element of the button text property of the called location object
  button3.innerText = location["button text"][2]; // selects the 3rd element of the button text property of the called location object
  button1.onclick = location["button functions"][0]; // selects the 1st element of the button functions property of the called location object
  button2.onclick = location["button functions"][1]; // selects the 2nd element of the button functions property of the called location object
  button3.onclick = location["button functions"][2]; // selects the 3rd element of the button functions property of the called location object
  text.innerHTML = location.text; // updates the current status HTML with the text property of the called location object
}

// fucntions assigned for the three buttons on the game page
function goTown() {
  update(locations[0]); // passes the first location as parameter to the update function
}

function goStore() {
  update(locations[1]); // passes the second location as parameter to the update function
}

function goCave() {
  update(locations[2]); // passes the third location as parameter to the update function
}

// shop functions of buying health
function buyHealth() {
  // IF-ELSE CONDITION
  if (gold >= 10) {
    gold -= 10; // x -= y used as shorthand for x = x - y 
    health += 10; // x += y used as shorthand for x = x + y
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

// shop functions of buying weapon
function buyWeapon() {
  // NESTED IF-ELSE CONDITION
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++; // ++ or -- used for incrementing or decrementing by 1  
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name; // dot notation is also another way to get the value of a property of an object
      text.innerText = "You now have a " + newWeapon + "."; // + operation used as a concatenation operator here 
      inventory.push(newWeapon); // push function is used to add a new item to an array
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

// shop functions of selling weapons - cannot sell last remaining weapon
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift(); // shift function withdraws the first element from the array and returns it 
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

// functions for fighting different monsters - the fighting variable changes its value accordingly
function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

// updates the game UI/webpage to show fighting statuses
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

// attack function - executes on button click
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp)); // This will set the monster's attack to five times their level minus a random number between 0 and the player's xp.
  console.log(hit);
  return hit > 0 ? hit : 0; // The ternary operator is a conditional operator and can be used as a one-line if-else statement. 
                            // The syntax is: condition ? expressionIfTrue : expressionIfFalse.
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

// dodge function - executes on button click
function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

// on defeating a monster
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7); // Math floor function rounds down a decimal number to the highesat integer which is less than the decimal
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

// on losing against a monster
function lose() {
  update(locations[5]);
}

// on winning the game
function winGame() {
  update(locations[6]);
}

// on restarting the game
function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

// function for the easter egg minigame
function easterEgg() {
  update(locations[7]);
}


function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  // while loop syntax
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

  // for loop syntax
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}