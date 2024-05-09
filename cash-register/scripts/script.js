let price = 19.5;
let cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];


let cash = document.getElementById("cash");
let purchaseButton = document.getElementById("purchase-btn");
let changeDueOutput = document.getElementById("change-due");
let priceshow = document.getElementById("price");
let cashregister = document.getElementById("cash-register");
let price_view = document.getElementById("price");
let cash_register_view = document.getElementById("cash-register");

price_view.innerHTML = `${price}`;

// function to split the change into respective denominations, subtract them from the cid and 
const checkCalc = (differ) => {
  const cashleft = cashInDrawer()*1000;
  //console.log(differ);
  // console.log(typeof diff);
  //console.log(cashleft);
  // console.log(typeof cashleft);
  // console.log(cashleft > diff)
  if (cashleft > differ) {
    changeDueOutput.innerHTML = "<p>Status: OPEN</p>"
    denomCalc(differ); 
  }
  else if (cashleft === differ){
    changeDueOutput.innerHTML = "<p>Status: CLOSED</p>";
    denomCalc(differ);
    return;
  }
  else if (cashleft < differ){
    changeDueOutput.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
    return;
  }
};

// function to check the total cash in drawer after each transaction
const cashInDrawer = () => {
    let totalcid = 0;
    
    for(let i = 0; i < cid.length; i++){
        totalcid += cid[i][1];
    }
    return totalcid.toPrecision(5);
    
};


const denomCalc = (numb) => {
  const denomArr = cid
  .reduce((acc, [key, value]) => {
    acc[key] = 0.00;
    return acc;
  }, {});
  //console.log(number);
  let number = parseFloat(numb).toPrecision(5);
  console.log(number);
  while (number > 0){
    if(number >= 100000 && cid[cid.length-1][1]>0){
      number -= 100000;
      console.log(number);
      cid[cid.length-1][1] -= 100.00;
      denomArr[cid[cid.length-1][0]] += 100.00;
    }
    else if(number >= 20000 && cid[cid.length-2][1]>0){
      number -= 20000;
      console.log(number);
      cid[cid.length-2][1] -= 20.00;
      denomArr[cid[cid.length-2][0]] += 20.00;
    }
    else if(number >= 10000 && cid[cid.length-3][1]>0){
      number -= 10000;
      console.log(number);
      cid[cid.length-3][1] -= 10.00;
      denomArr[cid[cid.length-3][0]] += 10.00;
    }
    else if(number >= 5000 && cid[cid.length-4][1]>0){
      number -= 5000;
      console.log(number);
      cid[cid.length-4][1] -= 5.00;
      denomArr[cid[cid.length-4][0]] += 5.00;
    }
    else if(number >= 1000 && cid[cid.length-5][1]>0){
      number -= 1000;
      console.log(number);
      cid[cid.length-5][1] -= 1.00;
      denomArr[cid[cid.length-5][0]] += 1.00;
    } 
    else if(number >= 250 && cid[cid.length-6][1]>0){
      number -= 250;
      console.log(number);
      cid[cid.length-6][1] -= 0.25;
      denomArr[cid[cid.length-6][0]] += 0.25;
    }
    else if(number >= 100 && cid[cid.length-7][1]>0){
      number -= 100;
      console.log(number);
      cid[cid.length-7][1] -= 0.10;
      denomArr[cid[cid.length-7][0]] += 0.10;
    } 
    else if(number >= 50 && cid[cid.length-8][1]>0){
      number -=50;
      console.log(number);
      cid[cid.length-8][1] -= 0.05;
      denomArr[cid[cid.length-8][0]] += 0.05;
    }
    else if(number >= 10 && cid[cid.length-9][1]>0){
      number -= 10;
      console.log(number);
      cid[cid.length-9][1] -= 0.01;
      denomArr[cid[cid.length-9][0]] += 0.01;
    }
    else if(number === 0){
      console.log(number);
      return;
    }
    else {
      changeDueOutput.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
      return;
    }
    
  }
  changeDueOutput.innerHTML += `<p>${denomArr["ONE HUNDRED"]?"ONE HUNDRED: $" + denomArr["ONE HUNDRED"]:""} ${denomArr["TWENTY"]?"TWENTY: $" + denomArr["TWENTY"]:""} ${denomArr["TEN"]?"TEN: $" + denomArr["TEN"]:""} ${denomArr["FIVE"]?"FIVE: $" + denomArr["FIVE"]:""} ${denomArr["ONE"]?"ONE: $" + denomArr["ONE"]:""} ${denomArr["QUARTER"]?"QUARTER: $" + denomArr["QUARTER"]:""} ${denomArr["DIME"]?"DIME: $" + denomArr["DIME"]:""} ${denomArr["NICKEL"]?"NICKEL: $" + denomArr["NICKEL"]:""} ${denomArr["PENNY"]?"PENNY: $" + denomArr["PENNY"]:""}</p>`
  cash_register_view.innerHTML = `${cid}`;

}  
  
purchaseButton.addEventListener("click",() => {
  const changeleft = parseFloat(cash.value).toPrecision(4)*1000 - price*1000;
  //console.log(changeleft);
  // console.log(typeof changeleft);

  if(changeleft === 0){
    changeDueOutput.innerHTML = "<p>No change due - customer paid with exact cash</p>";
    return;
  }
  else if (changeleft < 0){
    changeDueOutput.innerHTML = "<p>Customer does not have enough money to purchase the item</p>";
    return;
  }
  else {
    // TODO: function to 
    checkCalc(changeleft)
  }
  
});