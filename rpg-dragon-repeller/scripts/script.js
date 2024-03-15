// //Variable declarations are of three types - var, const and let. 'let' is the most popular and shall be used here.
let xp = 0;  
let health = 100; 
let gold = 50;
let currentWeapon = 0; 
let fighting;  
let monsterHealth; 
let inventory = ["stick"]; 

// //The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. 
   //Shall be used for performing various operations in the webpage to make it more interactive.
const button1 = document.querySelector("#button1"); 
const button2 = document.querySelector("#button2"); 
const button3 = document.querySelector("#button3"); 
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
   { name: 'stick', power: 5 },
   { name: 'dagger', power: 30 },
   { name: 'claw hammer', power: 50 },
   { name: 'sword', power: 100 }
 ];

// created an array to include all locations as objects
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
   }
 ];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// create an location updating function which can be refactored in all the required places
function update(location) {
   button1.innerText = location["button text"][0];
   button2.innerText = location["button text"][1];
   button3.innerText = location["button text"][2];
   button1.onclick = location["button functions"][0];
   button2.onclick = location["button functions"][1];
   button3.onclick = location["button functions"][2];
   text.innerText = location.text;
 }

// go to town after going to store
function goTown() {
   update(locations[0]);
 }
 
 // go to the store
 function goStore() {
   update(locations[1]);
 }

// go to the cave 
 function goCave() {
   update(locations[2]);
 }
 
 // fight the dragon
 function fightDragon() {
   console.log("Fighting dragon.");
 }
 

 // buying health in the store - condition - gold must be greater than 10
 function buyHealth() {
   if (gold >= 10) {
     gold -= 10;
     health += 10;
     goldText.innerText = gold;
     healthText.innerText = health;
   } else {
     text.innerText = "You do not have enough gold to buy health.";
   }
 }
 

 // buying new weapons - conditions - atleast 30 gold and best weapon not yet bought
 function buyWeapon() {
   if (currentWeapon < weapons.length - 1) {
     if (gold >= 30) {
       gold -= 30;
       currentWeapon++;
       goldText.innerText = gold;
       let newWeapon = weapons[currentWeapon].name;
       text.innerText = "You now have a " + newWeapon + ".";
       inventory.push(newWeapon);
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
 
// selling other weapons - condition - must have more than one weapon already
 function sellWeapon() {
   if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
  
    }
 }
 
 function fightSlime() {
 
 }
 
 function fightBeast() {
 
 }