function hideElement(elemId) {
  let element = document.getElementById(elemId);
  element.classList.add("hidden");
}

function showElement(elemId) {
  let element = document.getElementById(elemId);
  element.classList.remove("hidden");
}

function createRandomAlphabet() {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let strArray = str.split("");
  let randomNumber = Math.floor(Math.random() * 26);
  let randomAlphabet = strArray[randomNumber];
  return randomAlphabet;
}

function setBackgroundColor(backgroundId) {
  let element = document.getElementById(backgroundId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(backgroundId){
  let element = document.getElementById(backgroundId);
  element.classList.remove('bg-orange-400')
}


