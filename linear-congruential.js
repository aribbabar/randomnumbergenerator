const seedInput = document.getElementById("seed");
const resultInput = document.getElementById("result");
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");

const invalid = document.getElementById("invalid");

if(generate != null) {
    generate.addEventListener("click", generateRandomNumber);
}

if(clear != null) {
    clear.addEventListener("click", clearValues);
}

function generateRandomNumber() {
    let seed;
    let lower;
    let upper;
    let result;

    let multiplier = 8452056;
    let increment = 9402356;
    let mod = Math.pow(2, 32);

    lower = parseInt(document.getElementById("lower-bound").value);
    upper = parseInt(document.getElementById("upper-bound").value);

    if(upper < lower) {
        invalid.innerHTML = "Upper bound can not be lower than lower bound!";
        invalid.style.display = "block";

        return;
    } else {
        invalid.style.display = "none";
    }

    if(seedInput.value == "") {
        seed = new Date().getMilliseconds();
    } else {
        seed = parseInt(seedInput.value);
    }

    result = ((multiplier * seed) + increment) % mod;
    result /= mod;

    result = Math.floor(result * (upper - lower + 1)) + lower;

    resultInput.value = result;
}

function clearValues() {
    seedInput.value = "";
    document.getElementById("lower-bound").value = "";
    document.getElementById("upper-bound").value = "";
    document.getElementById("result").value = "";

    invalid.style.display = "none"
}