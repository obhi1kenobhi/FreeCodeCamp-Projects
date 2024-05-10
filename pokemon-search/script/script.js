const baseurl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const poke_sprite = document.getElementById("sprite");
const poke_name = document.getElementById("pokemon-name");
const poke_id = document.getElementById("pokemon-id");
const poke_weight = document.getElementById("weight");
const poke_height = document.getElementById("height");
const poke_types = document.getElementById("types");
const poke_hp = document.getElementById("hp");
const poke_attack = document.getElementById("attack");
const poke_defense = document.getElementById("defense");
const poke_spattack = document.getElementById("special-attack");
const poke_spdefense = document.getElementById("special-defense");
const poke_speed = document.getElementById("speed");

const completeUrl = (baseurl,input) =>{
    if(!Number(input.value)){
        const inputData = input.value;
        console.log(input.value, typeof input.value)
        const urltail = inputData.toLowerCase().replace("♀","f").replace("♂","m").replace(/([^a-z\s]*)/g,"").split(" ").join("-");
        return baseurl + urltail;
    }
    
    const inputData = input.value;
    console.log(inputData, typeof inputData)
    return baseurl + inputData;
}

const fetchData = async () => {
    const pokeapiurl = completeUrl(baseurl, input);
    console.log(pokeapiurl);
    try {
      const res = await fetch(pokeapiurl);
      const data = await res.json();
      console.log(data)
      showPokeInfo(data);
    } catch (err) {
        alert("Pokémon not found");
        //console.log(err);
    }
  };
  
  searchBtn.addEventListener("click",fetchData);
  
 const showPokeInfo = (data) => {
    const { base_experience, height, id, name, order, sprites, stats, types, weight } = data;
    poke_sprite.src = sprites["front_default"];
    poke_name.innerText = name.toUpperCase();
    poke_id.innerText = id;
    poke_weight.innerText = weight;
    poke_height.innerText = height;
    poke_types.innerHTML = types.map((item) => {
      const { slot, type } = item;
      const { name, url } = type;
  
      return `<span>${name.toUpperCase()}</span>`;
    }).join(" ");
    poke_hp.innerText = stats[0].base_stat;
    poke_attack.innerText = stats[1].base_stat;
    poke_defense.innerText = stats[2].base_stat;
    poke_spattack.innerText = stats[3].base_stat;
    poke_spdefense.innerText = stats[4].base_stat;
    poke_speed.innerText = stats[5].base_stat;
};
  
  
  
  
