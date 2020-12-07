let randomNumber = Math.trunc(Math.random()*100);
let bouton = document.getElementById("button");
let divResult = document.getElementById("result");
let input = document.getElementById("numberField");
console.log("random number = " + randomNumber);
let boutonSupp = document.getElementById("restart");
let essai = 10;

bouton.addEventListener("click", function () {

    if (essai > 0) {
        let paraCreate = document.createElement("p");
        paraCreate.innerHTML = input.value;
        divResult.append(paraCreate);
        essai--;
    }
    if (essai === 0) {
        alert("Better luck next time");
    }
    if (parseInt(input.value) === randomNumber) {
        alert("Winner !");
    }
    else if (input.value < randomNumber) {
        alert("Bigger");
    }
    else if (input.value > randomNumber) {
        alert("Smaller");
    }
})

boutonSupp.addEventListener("click", function () {
    randomNumber = Math.trunc(Math.random()*100);
    console.log("random number = " + randomNumber);
    input.value = "";
    essai = 10;
    let para = document.querySelectorAll("p");

    for (x = 0; x < para.length; x++) {
        para[x].remove();
    }

});