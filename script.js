const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom");
const people = document.querySelector("#people");
const selectedBtns = document.querySelectorAll(".chosen__input");

let billAmount = 0;
let tipAmount = 0;
let numberPeople = 0;
let passedEvent = 0;

selectedBtns.forEach(function(selectedBtn) {
  selectedBtn.addEventListener("click", getEvent);
})

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
  const number = event.currentTarget.value;
  const parentElement = event.currentTarget.parentNode;
  let errorContent = parentElement.querySelector("span");

  if (number === "") {
    showError(parentElement);
    errorContent.innerText = "Can't be zero"
  } else {
    if (!(isNaN(number))) {
      if (event.currentTarget === people) {
        numberPeople = parseInt(number)
      } else if (event.currentTarget === bill) {
        billAmount = parseFloat(number);
      } else {
        tipAmount = parseFloat(number);
      }
      showSuccess(parentElement);
      errorContent.innerText = "";
      calculateCost(billAmount, tipAmount, numberPeople);
    } else {
      showError(parentElement);
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

function validateValue(value) {
  return ((!isNaN(value)) && (value != 0)) ? true : false;
}

function calculateCost(billAmount, tipAmount, numberPeople) {
  if (validateValue(billAmount) && validateValue(tipAmount) && validateValue(numberPeople)) {
    let tip = (billAmount*tipAmount) / 5;
    console.log(tip);
  }
}