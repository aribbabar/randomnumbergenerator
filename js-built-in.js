const generate = document.getElementById("generate");
const clear = document.getElementById("clear");
const result = document.getElementById("result");

const invalid = document.getElementById("invalid");

if(generate != null) {
    generate.addEventListener("click", generateRandomNumber)
}

if(clear != null) {
    clear.addEventListener("click", clearValues);
}

function generateRandomNumber() {
    let lower;
    let upper;

    lower = parseInt(document.getElementById("lower-bound").value);
    upper = parseInt(document.getElementById("upper-bound").value);

    if(upper < lower) {
        invalid.innerHTML = "Upper bound can not be lower than lower bound!";
        invalid.style.display = "block";

        return;
    } else {
        invalid.style.display = "none";
    }

    result.value = Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function clearValues() {
    document.getElementById("lower-bound").value = "";
    document.getElementById("upper-bound").value = "";
    document.getElementById("result").value = "";

    invalid.style.display = "none";
}