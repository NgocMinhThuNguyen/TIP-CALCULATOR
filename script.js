const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom");
const people = document.querySelector("#people");
const selectedBtns = document.querySelectorAll(".chosen__input");
const deleteBtn = document.querySelector("button");
const radioBtns = document.querySelectorAll("input[type='radio']");
const tipResult = document.querySelector(".tip");
const totalResult = document.querySelector(".total");

let billAmount = 0;
let tipAmount = 0;
let numberPeople = 0;

// Start calculator
selectedBtns.forEach(function(selectedBtn) {
  selectedBtn.addEventListener("click", getEvent);
})

// Reset calculator
deleteBtn.addEventListener("click", () => {
  resetForm(bill);
  resetForm(customTip);
  resetForm(people);
  resetResult(tipResult);
  resetResult(totalResult);

  radioBtns.forEach(radioBtn => {
    radioBtn.checked = false;
  })

  billAmount = 0;
  tipAmount = 0;
  numberPeople = 0;
});

function getEvent(event) {
  if ((event.currentTarget === bill) || (event.currentTarget === people)) {
    event.currentTarget.addEventListener("input", validateInput);
  } else {
    if (event.currentTarget.hasAttribute("data-tip")) {
      tipAmount = parseInt(event.target.dataset.tip);
      calculateCost(billAmount, tipAmount, numberPeople);
    } else {
      event.currentTarget.addEventListener("input", validateInput);
    }
  }
}

function validateInput (event) {
  const userInput = event.currentTarget.value;
  const wrapper = event.currentTarget.parentNode;
  let errorContent = wrapper.querySelector("span");

  if (userInput === "0" || userInput === "") {
    if((event.currentTarget !== customTip)) {
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
  let tipResult = document.querySelector(".tip");
  let totalResult = document.querySelector(".total");

  if ((billAmount !== 0) && (numberPeople !== 0)) {
    billAmount = billAmount*100;
    tipAmount = tipAmount/100;

    let tip = (billAmount*tipAmount) / numberPeople;
    let total = (billAmount + billAmount*tipAmount) / numberPeople;

    tipResult.textContent = (Math.round(tip)/100); 
    totalResult.textContent = (Math.round(total)/100);
  }
}

function resetForm(event) {
  event.value = "";
}

function resetResult(event) {
  event.textContent = "0.00";
}