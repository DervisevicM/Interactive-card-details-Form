
const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from (document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".cardholder-display");
const numOnCard = document.querySelector(".card-number-display");
const expMM = document.querySelector(".expiry-month-display");
const expYY = document.querySelector(".expiry-year-display");
const cvcDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.querySelector(".hidden");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");



function inputName(){
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = `Thank You ${cardholder.value}`;
    if (nameOnCard.innerHTML == ""){
        nameOnCard.innerHTML = cardholder.placeholder;
    }
}

function inputCardNum(){
    numOnCard.innerHTML = cardNumber.value;
    
    if (numOnCard.innerHTML == ""){
        numOnCard.innerHTML = cardNumber.placeholder;
    }

}

function inputMM(){
    let formattedMM = expiry[0].value;
    formattedMM = formattedMM.substring(0, 2);
    expiry[0].value = formattedMM;
    if (expiry[0].value === ""){
        expMM.innerHTML = "00";
    } else {
        expMM.innerHTML = expiry[0].value;
    }

}

function inputYY(){
    let formattedYY = expiry[1].value;
    formattedYY = formattedYY.substring(0, 2);
    expiry[1].value = formattedYY;
    if (expiry[1].value === ""){
        expYY.innerHTML = "0000";
    } else {
        expYY.innerHTML = expiry[1].value;
    }

}

function inputCvc(){
    let formattedCvc = cvc.value;
    formattedCvc = formattedCvc.substring(0, 3);
    cvc.value = formattedCvc;
    if (cvc.value === ""){
        cvcDisplay.innerHTML = "000";
    } else {
        cvcDisplay.innerHTML = cvc.value;
    }
}



submit.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
      
})




continueBtn.addEventListener("click", function(){
    event.preventDefault();
    thankYouSection.classList.add("hidden");
    form.classList.remove("hidden");
    nameOnCard.innerHTML = "JANE APPLESEED";
    numOnCard.innerHTML = "0000 0000 0000 0000";
    expMM.innerHTML = "00/00";
    expYY.innerHTML = "0000";
    cvcDisplay.innerHTML = "000";
    cardholder.value = "";
    cardNumber.value = "0000 0000 0000 0000";
    expiry[0].value = "";
    expiry[1].value = "";
    cvc.value = "";
});
