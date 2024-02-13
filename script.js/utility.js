function hideElement(elemId) {
  let element = document.getElementById(elemId);
  element.classList.add("hidden");
}

function showElement(elemId) {
  let element = document.getElementById(elemId);
  element.classList.remove("hidden");
}

function findAlphabet() {
  let string = "abcdefghijklmnopqrstuvwxyz";
  let stringArray = string.split("");
  let num = Math.floor(Math.random() * 25);
  let randomAlphabet = stringArray[num];
  return randomAlphabet;
}


function setBackgroundColor(elementId) {
    let element = document.getElementById(`${elementId}`);
    element.classList.add('bg-orange-400')
    console.log(element)
}
