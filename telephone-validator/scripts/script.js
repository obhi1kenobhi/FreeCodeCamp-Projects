const input_num = document.getElementById("user-input");
const check_btn = document.getElementById("check-btn");
const clear_btn = document.getElementById("clear-btn");
const output_div = document.getElementById("results-div");

const num_checker = () => {
    const regex = /^([1])?( |\-)?(\(\d{3}\)|(\d{3}))( |\-)?\d{3}( |\-)?\d{4}$/;
    return regex.test(input_num.value)
}

check_btn.addEventListener("click",()=>{
    if(input_num.value === ""){
        alert("Please provide a phone number");
        return;
    }

    output_div.innerHTML += num_checker() ? `<p>"Valid US number: ${input_num.value}"</p>` : `<p>"Invalid US number: ${input_num.value}"</p>`
    input_num.value = "";
})

clear_btn.addEventListener("click",()=>{
    output_div.innerHTML = "";
})


