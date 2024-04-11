const input_element = document.getElementById("number");
const submit_button = document.getElementById("convert-btn");
const output_result = document.getElementById("output");
let roman_num = "";

const inplacer = () => {
    return parseInt(input_element.value);
}

const checker = (number) => {
    if(Number.isNaN(number)) {
        output_result.textContent = "Please enter a valid number";
        return;
    }
    else if (number >= 4000) {
        output_result.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
    else if (number <= 0) {
        output_result.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    else {
        
        output_result.textContent = "";
        converter(number);
        output_result.textContent = roman_num;    
    }
    
}

const converter = (numb) => {
    if (numb === 0){
        return;
    }
    else {
        if (numb >= 1000){
            roman_num += "M";
            return converter(numb - 1000);
        }
        else if (numb >= 900){
            roman_num += "CM";
            return converter(numb - 900);
        }
        else if (numb >= 500){
            roman_num += "D";
            return converter(numb - 500);
        }
        else if (numb >= 400){
            roman_num += "CD";
            return converter(numb - 400);
        }
        else if (numb >= 100){
            roman_num += "C";
            return converter(numb- 100);
        }
        else if (numb >= 90){
            roman_num += "XC";
            return converter(numb - 90);
        }
        else if (numb >= 50){
            roman_num += "L";
            return converter(numb - 50);
        }
        else if (numb >= 40){
            roman_num += "XL";
            return converter(numb - 40);
        }
        else if (numb >= 10){
            roman_num += "X";
            return converter(numb - 10);
        }
        else if (numb >= 9){
            roman_num += "IX";
            return converter(numb - 9);
        }
        else if (numb >= 5){
            roman_num += "V";
            return converter(numb - 5);
        }
        else if (numb >= 4){
            roman_num += "IV";
            return converter(numb - 4);
        }
        else if (numb >= 1){
            roman_num += "I";
            return converter(numb - 1);
        }
    }
}


const sequencer = () => {
    roman_num = "";
    const value_input = inplacer();
    checker(value_input);
}


submit_button.addEventListener("click",sequencer);