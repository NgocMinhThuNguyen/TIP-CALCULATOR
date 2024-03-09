const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom");
const people = document.querySelector("#people");
const userInput = document.querySelectorAll(".number");

userInput.forEach(checkSelectedInput);

function checkSelectedInput(selectedInput) {
  selectedInput.addEventListener("input", (event) => {
    let a = getNumber(event);
  })
}

function getNumber (event) {
  const number = event.currentTarget.value;
  const parentElement = event.currentTarget.parentNode;

  if (number === "") {
    showError(parentElement);
  } else {
    if (!(isNaN(number))) {
      showSuccess(parentElement);
      if (event.currentTarget === people) {
        return parseInt(number);
      } else {
        return parseFloat(number);
      }
    } else {
      showError(parentElement);
    }
  }
}

function showError(error) {
  let errorContent = error.querySelector("span");
  if (error.classList.contains("success")) {
    error.classList.remove("success");
  }

  if (!(error.classList.contains("error"))) {
    error.classList.add("error");
  }
  errorContent.innerText = "Can't be zero";
}

function showSuccess(error) {
  if ((error.classList.contains("error"))) {
    error.classList.remove("error");
  }

  if (!(error.classList.contains("success"))) {
    error.classList.add("success");
  }
}