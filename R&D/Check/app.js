var testSubmit = document.querySelector('#testSubmit');
var testInput = document.querySelector('#testInput');
var retour = document.querySelector('#return');
var playground = document.querySelector('.playGround');
var main = document.querySelector('.main');
var score = 0;
var erreur = 0;
const guessing = ['html', 'css', 'js'];

testSubmit.addEventListener('click', function(e) {
    var minInput = testInput.value.toLowerCase();
    for (let i = 0; i < guessing.length; i++) {
        if (minInput === guessing[i]) {
            if (score === 2) {
                retour.innerHTML += '<p>'+guessing[i]+'</p>';
                retour.innerHTML += "<strong>Vous avez gagné !</strong>";
            }
            else{
                retour.innerHTML += '<p>'+guessing[i]+'</p>';
                testInput.value = '';
            }
            score++;
            main.classList.add('hide');
            return;
        } else if (i === 2) {
            if (erreur === 2) {
                document.querySelector('body').innerHTML = "Vous avez perdu !";
            }
            else{
                retour.innerHTML = 'Dommage !';
                testInput.value = '';
            }
            erreur++;
        }
    }
})
playground.addEventListener('click', function(e) {
    main.classList.remove('hide');
})

