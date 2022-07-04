var testInput = document.querySelector('#testInput');
var retour = document.querySelector('#return');
var overlay = document.querySelector('#overlay');
var modal = document.querySelector('.modalTest');
var minInput = testInput.innerHTML.toLowerCase();
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Semicolon', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var score = 0;
var erreur = 0;
var found = [];
const guessing = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'Java', 'Bash', 'Shell', 'PowerShell','C#','PHP', 'C++', 'Typescript', 'C', 'Ruby','Go','Assembly','Swift','Kotlin','R','VBA','Objective-C','Scala','Rust','Dart','Elixir','Clojure','WebAssembly'];
const guessingMin = []
function checkScore(checkNow) {
    if (score === 2) {
        retour.innerHTML += '<p>'+checkNow+'</p>';
        retour.innerHTML += "<strong>Vous avez gagné !</strong>";
    }
    else{
        retour.innerHTML += '<p>'+checkNow+'</p>';
        testInput.innerHTML = '';
        found[score] = minInput;
        score++;
    }
}
function removeHide(){
    overlay.classList.remove('hide');
}
function hide(){
    overlay.classList.add('hide');
}
for (let a = 0; a < guessing.length; a++) {
    guessingMin[a] = guessing[a].toLowerCase(); 
}

overlay.addEventListener('click', function(){
    if (testInput.innerHTML ==='') {
        hide();
    }
});

window.addEventListener('keydown', function checking(e) {
    console.log(e.code);
    if (erreur ===3){
        return;
    }
    if (testInput.innerHTML !== '') {
        if (e.code === "Enter"){
            minInput = testInput.innerHTML.toLowerCase();
            if (found.length !== 0){
                for (var i = 0; i < found.length; i++) {
                    if (minInput === found[i]) {
                        retour.innerHTML += '<p> vous avez déjà trouvé '+found[i]+'</p>';
                        overlay.classList.add('hide');
                        testInput.innerHTML = '';
                        return;
                    }
                }
            }
            for (let i = 0; i < guessing.length; i++) {
                if (minInput === guessingMin[i]) {
                    checkScore(guessing[i]);
                    overlay.classList.add('hide');
                    return;
                } else if (i === 2) {
                    if (erreur === 2) {
                        retour.innerHTML = "<p>Vous avez perdu !</p>";
                        erreur++;
                    }
                    else{
                        testInput.innerHTML = '';
                        erreur++;
                    }
                    overlay.classList.add('hide');
                }
            }
        }
        if (e.code ==='Backspace'){
            testInput.innerHTML = testInput.innerHTML.slice(0, -1);
        }    
    }
    for (let z = 0; z < letters.length; z++) {
        if (e.code === "Key"+letters[z] || e.code === letters[z]) {
            if(overlay.classList[0] === 'hide'){
            removeHide();
            }
            document.querySelector('#testInput').innerHTML += e.key
        }
    }
})