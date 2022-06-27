var testInput = document.querySelector('#testInput');
var retour = document.querySelector('#return');
var playground = document.querySelector('.playGround');
var main = document.querySelector('#main');
var modal = document.querySelector('.modalTest');
var minInput = testInput.innerHTML.toLowerCase();
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Semicolon', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var score = 0;
var erreur = 0;
var found = [];
const guessing = ['HTML', 'CSS', 'JavaScript'];
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
function hide(){
    main.classList.remove('hide');
}





for (let a = 0; a < guessing.length; a++) {
    guessingMin[a] = guessing[a].toLowerCase();
    
}

playground.addEventListener('click', hide);
window.addEventListener('keydown', function checking(e) {
    if (erreur ===3){
        return;
    }
    for (let z = 0; z < letters.length; z++) {
        if (e.code === "Key"+letters[z] || e.code === letters[z]) {
            if(main.classList[0] === 'hide'){
            hide();
            }
            document.querySelector('#testInput').innerHTML += e.key
        }
    }
    if (testInput.innerHTML !== '') {
        if (e.code === "Enter"){
            minInput = testInput.innerHTML.toLowerCase();
            if (found.length !== 0){
                for (var i = 0; i < found.length; i++) {
                    if (minInput === found[i]) {
                        retour.innerHTML += '<p> vous avez déjà trouvé '+found[i]+'</p>';
                        main.classList.add('hide');
                        testInput.innerHTML = '';
                        return;
                    }
                }
            }
            for (let i = 0; i < guessing.length; i++) {
                if (minInput === guessingMin[i]) {
                    checkScore(guessing[i]);
                    main.classList.add('hide');
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
                    main.classList.add('hide');
                }
            }
        }
    }

})
