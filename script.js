const enterBill = document.querySelector("#bill");
const enterTip = document.querySelector("#custom2");
const enterPeople = document.querySelector("#people");
const selectedTip = document.querySelector(".selected__tip");
const tipResult = document.querySelector(".tip");
const totalResult = document.querySelector(".total");
const form = document.querySelector(".calculator__form")

let billAmount = 0;
let tipAmount = 0;
let numberPeople = 0;

enterBill.addEventListener("input", validateInput);
enterPeople.addEventListener("input", validateInput);
selectedTip.addEventListener("change", getTip);
form.addEventListener("reset", (event) => {
  billAmount = 0;
  tipAmount = 0;
  numberPeople = 0;

  tipResult.textContent = "0.00";
  totalResult.textContent = "0.00";
});

function validateInput (event) {
  const userInput = event.currentTarget.value;
  const wrapper = event.currentTarget.parentNode;
  let errorContent = wrapper.querySelector("span");

  if (userInput === "0" || userInput === "") {
    if((event.currentTarget !== enterTip)) {
      showError(wrapper);
      errorContent.innerText = "Can't be zero";
    }
  } else {
    if (!(isNaN(userInput))) {
      if (event.currentTarget === people) {
        numberPeople = parseInt(userInput)
      } else if (event.currentTarget === bill) {
        billAmount = parseFloat(userInput);
      } else {
        tipAmount = parseFloat(userInput);
      }
      showSuccess(wrapper);
      errorContent.innerText = "";
      calculateCost(billAmount, tipAmount, numberPeople);
    } else {
      showError(wrapper);
      errorContent.innerText = "Should be a number"
    }
  }
}

function getTip(event) {
  if (event.target.hasAttribute("data-tip")) {
    tipAmount = parseInt(event.target.dataset.tip);
    calculateCost(billAmount, tipAmount, numberPeople);
  } else {
    const textInput = document.querySelector("#custom2");
    const labelRadio = document.querySelector("label.radio__opt");   
    event.target.style.display = "none";
    labelRadio.style.display = "none";
    textInput.style.display = "block";
    textInput.focus();

    textInput.addEventListener("input", validateInput);
  }
}

function showError(error) {
  if (error.classList.contains("success")) {
    error.classList.remove("success");
  }

  if (!(error.classList.contains("error"))) {
    error.classList.add("error");
  }
}

function showSuccess(error) {
  if ((error.classList.contains("error"))) {
    error.classList.remove("error");
  }

  if (!(error.classList.contains("success"))) {
    error.classList.add("success");
  }
}

function calculateCost(billAmount, tipAmount, numberPeople) {
  if ((billAmount !== 0) && (numberPeople !== 0)) {
    billAmount = billAmount*100;
    tipAmount = tipAmount/100;

    let tip = (billAmount*tipAmount) / numberPeople;
    let total = (billAmount + billAmount*tipAmount) / numberPeople;

    tipResult.textContent = (Math.round(tip)/100); 
    totalResult.textContent = (Math.round(total)/100);
  }
}