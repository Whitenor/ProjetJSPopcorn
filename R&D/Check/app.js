var Input = document.querySelector('#Input');
var retour = document.querySelector('#return');
var overlay = document.querySelector('#overlay');
var overlay = document.querySelector('.overlay');
var minInput = Input.innerHTML.toLowerCase();
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Semicolon', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var score = 0;
var erreur = 0;
var found = [];
const guessing = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'Java', 'Bash', 'Shell', 'PowerShell','C#','PHP', 'C++', 'Typescript', 'C', 'Ruby','Go','Assembly','Swift','Kotlin','R','VBA','Objective-C','Scala','Rust','Dart','Elixir','Clojure','WebAssembly'];
const guessingMin = []
function checkScore(checkNow) {
    if (score === 2) {
        return;
    }
    else{
        Input.innerHTML = '';
        found[score] = minInput;
        score++;
    }
}
function removenone(){
    overlay.classList.remove('none');
}
function none(){
    overlay.classList.add('none');
}
for (let a = 0; a < guessing.length; a++) {
    guessingMin[a] = guessing[a].toLowerCase(); 
}

overlay.addEventListener('click', function(){
    if (Input.innerHTML ==='') {
        none();
    }
});

window.addEventListener('keydown', function checking(e) {
    console.log(e.code);
    if (erreur ===3){
        return;
    }
    if (Input.innerHTML !== '') {
        if (e.code === "Enter"){
            minInput = Input.innerHTML.toLowerCase();
            if (found.length !== 0){
                // for (var i = 0; i < found.length; i++) {
                //     if (minInput === found[i]) {
                //         retour.innerHTML += '<p> vous avez déjà trouvé '+found[i]+'</p>';
                //         overlay.classList.add('none');
                //         Input.innerHTML = '';
                //         return;
                //     }
                // }
            }
            for (let i = 0; i < guessing.length; i++) {
                if (minInput === guessingMin[i]) {
                    checkScore(guessing[i]);
                    overlay.classList.add('none');
                    return;
                } else if (i === 2) {
                    if (erreur === 2) {
                        retour.innerHTML = "<p>Vous avez perdu !</p>";
                        erreur++;
                    }
                    else{
                        Input.innerHTML = '';
                        erreur++;
                    }
                    overlay.classList.add('none');
                }
            }
        }
        if (e.code ==='Backspace'){
            Input.innerHTML = Input.innerHTML.slice(0, -1);
        }    
    }
    for (let z = 0; z < letters.length; z++) {
        if (e.code === "Key"+letters[z] || e.code === letters[z]) {
            if(overlay.classList[0] === 'none'){
            removenone();
            }
            document.querySelector('#Input').innerHTML += e.key
        }
    }
})