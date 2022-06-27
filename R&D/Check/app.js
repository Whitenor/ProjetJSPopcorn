var testSubmit = document.querySelector('#testSubmit');
var testInput = document.querySelector('#testInput');
var retour = document.querySelector('#return');
var playground = document.querySelector('.playGround');
var main = document.querySelector('.main');
var modal = document.querySelector('.modalTest');
var minInput = testInput.value.toLowerCase();
var score = 0;
var erreur = 0;
const guessing = ['html', 'css', 'js'];
var found = [];


function checkScore() {
    if (score === 2) {
        retour.innerHTML += '<p>'+testInput.value+'</p>';
        retour.innerHTML += "<strong>Vous avez gagné !</strong>";
    }
    else{
        retour.innerHTML += '<p>'+testInput.value+'</p>';
        testInput.value = '';
        score++;
    }
}
function hide(){
    main.classList.remove('hide');
}






















testSubmit.addEventListener('click', function(e) {
    minInput = testInput.value.toLowerCase();
    for (let i = 0; i < guessing.length; i++) {
        if (minInput === guessing[i]) {
            checkScore();
            main.classList.add('hide');
            return;
        } else if (i === 2) {
            if (erreur === 2) {
                retour.innerHTML = "<p>Vous avez perdu !</p>";
                playground.removeEventListener('click', hide);
                console.log("test")
            }
            else{
                testInput.value = '';
                erreur++;
            }
            main.classList.add('hide');
        }
        console.log(erreur)
    }
})
// modal.addEventListener('click', function(e) {
//         main.classList.add('hide');
// })
playground.addEventListener('click', hide);
window.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.code === 'KeyR') {
        testInput.value+=e.key;
    }
})

