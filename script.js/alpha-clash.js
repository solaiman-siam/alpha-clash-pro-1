

function play(){
    hideElement('section-1');
    showElement('section-2');
    continueGame()
    
}


function continueGame() {
    let alphabet = findAlphabet();
    let currentAlphabet = document.getElementById('alphabetId');
    currentAlphabet.innerText = alphabet
    setBackgroundColor(alphabet)
}
