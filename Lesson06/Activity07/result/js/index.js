/**
 * Created by chuandong on 15/11/27.
 */

function load() {
  const btns = document.querySelectorAll("#calculator span");
  const operators = ["+", "-", "x", "÷"];
  const inputScreen = document.querySelector("#screen");
  let btnValue;
  let input;
  let lastChar;

  for (let i = 0; i < btns.length; i++) {
    let decimalAdded = false; // Flag used to avoid two decimal

    /* eslint-disable */
    btns[i].addEventListener("click", function() {
      /* eslint-enable */
      btnValue = this.innerHTML;
      input = inputScreen.innerHTML;

      switch (btnValue) {
        case "C":
          inputScreen.innerHTML = "";
          decimalAdded = false;
          break;
        case "=":
          // Last char of string
          lastChar = input[input.length - 1];

          // Replace x to *, + to / which could be calculated in eval
          input = input.replace(/x/g, "*").replace(/÷/g, "/");

          // Checking the last character of the input.
          // If it's an operator or a decimal, remove it
          // /.$/ means last char in regex
          if (operators.indexOf(lastChar) > -1 || lastChar === ".")
            input = input.replace(/.$/, "");

          if (input) {
            // If the argument is an expression, eval() evaluates the expression.
            // If the argument is one or more JavaScript statements, eval() executes the statements.
            /* eslint-disable */
            inputScreen.innerHTML = eval(input);
            /* eslint-enable */
          }
          decimalAdded = false;
          break;
        case ".":
          if (!decimalAdded) {
            inputScreen.innerHTML += btnValue;
            decimalAdded = true;
          }
          break;
        case "+":
        case "-":
        case "x":
        case "÷":
          // Last char of string
          lastChar = input[input.length - 1];

          // Only add operator if input is not empty and there is no operator at the last
          if (input !== "" && operators.indexOf(lastChar) === -1)
            inputScreen.innerHTML += btnValue;
          // Allows minus if the string is empty. The first number could be under zero
          else if (input === "" && btnValue === "-")
            inputScreen.innerHTML += btnValue;

          // Allows to represent the last operation
          if (operators.indexOf(lastChar) > -1 && input.length > 1) {
            inputScreen.innerHTML = input.replace(/.$/, btnValue);
          }
          decimalAdded = false;
          break;
        default:
          inputScreen.innerHTML += btnValue;
          decimalAdded = false;
          break;
      }
    });
  }
}

exports.default = load;
