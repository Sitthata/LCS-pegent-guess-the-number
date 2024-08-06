import guessTheNumber from ".";
const numberInput = document.getElementById("input-number");
const button = document.getElementById("guess-btn");

export function getInputValue() {
  return parseInt(numberInput.value);
}

button.onclick = () => {
  console.log("Button clicked");
  guessTheNumber();
}

