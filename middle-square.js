const seedInput = document.getElementById("seed");
const lowerInput = document.getElementById("lower-bound");
const upperInput = document.getElementById("upper-bound");
const resultInput = document.getElementById("result");

const invalid = document.getElementById("invalid");

document.getElementById("generate").addEventListener("click", generateRandomNumber);
document.getElementById("clear").addEventListener("click", clearValues);

function generateRandomNumber() {
    let seed = String(seedInput.value);
    let lower = parseInt(lowerInput.value);
    let upper = parseInt(upperInput.value);
    let result;

    if(upper < lower) {
        invalid.innerHTML = "Upper bound can not be lower than lower bound!";
        invalid.style.display = "block";
        console.log("hey");

        return;
    } else {
        invalid.style.display = "none";
    }

    // If the user doesn't specify a seed
    if(!seed) {
        seed = String(new Date().getMilliseconds());
    }

    // We need a even number of digits
    while((seed.length < 4) || (seed.length % 2 != 0)) {
        seed = "0" + seed;
    }

    // Get the middle two digits
    seed = seed.substring(seed.length / 2 - 1, seed.length / 2 + 1);

    // Square the middle digits
    result = parseInt(seed) * parseInt(seed);

    switch(result.toString().length) {
        case 1:
            result /= 9;
            break;
        case 2:
            result /= 99;
            break;
        case 3:
            result /= 999;
            break
        case 4:
            result /= 9999;
            break;
        default:
            break;
    }

    // I cheated a little
    if(result == 0) {
        resultInput.value = lower;
    } else if(result == 1) {
        resultInput.value = upper;
    } else {
        resultInput.value = Math.floor(result * (upper - lower + 1)) + lower;
    }
}

function clearValues() {
    seedInput.value = "";
    lowerInput.value = "";
    upperInput.value = "";
    resultInput.value = "";

    invalid.style.display = "none";
}