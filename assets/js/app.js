var typed =document.getElementById("typed");
var header = document.querySelector('header');
var launchGame = document.querySelector('#launchGame');
var mainGame = document.querySelector('.mainGame');
var Plus = document.querySelector('.plus');
var Min = document.querySelector('.minx');
var Input = document.querySelector('#Input');
var retour = document.querySelector('#return');
var overlay = document.querySelector('#overlay');
var countFound = document.querySelector('.countFound');
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Semicolon', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var checkCountRotate = 0;
var score = 0;
var erreur = 0;
var found = [];
const guessing = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'Java', 'Bash', 'Shell', 'PowerShell','C#','PHP', 'C++', 'Typescript', 'C', 'Ruby','Go','Assembly','Swift','Kotlin','R','VBA','Objective-C','Scala','Rust','Dart','Elixir','Clojure','WebAssembly'];
const guessingMin = [];
var testWidth = 50;
var errorCountTest = 1;
let loader = 
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="C'est l'histoire d'un développeur web et de 12 futur développeur web qui
     se sont mis en tête de faire rayonner l'ACS de Lons le Saunier">
    <link rel="stylesheet" href="style.css">
    <title>popCode</title>
</head>
<body>
    <header>
        <h1 class="formateur papermaker starcraft">Alain</h1>
    </header>
    <section>
        <div class="exploratrice satisfactory jeanine ">Pauline</div>
        <div class="EldenLord VTTiste ">Julien</div>
        <div>Bernard</div>
        <div>Tiana</div>
        <div class="nature travail">Chris</div>
        <div>Jorge</div>
        <div>Hamza</div>
        <div>Karolos</div>
        <div>Vincent</div>
        <div class="theRat">Natan</div>
        <div class ="satisfactory organise automatise">Léo</div>
        <div class="civilisation satisfactory weeb">Antoine</div>
    </section>
    <footer>
        <span id="en flamme">nos ordinateurs</span>
    </footer>
    <script src="app.js"></script>
</body>
</html> 
`;
var minInput = Input.innerHTML.toLowerCase();
//function typing text
function typingText(text, speed) {
    let i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            typed.innerHTML += text.charAt(i);
            i++;
        } else {
            typed.classList.add('fade')
            clearInterval(timer);
            setTimeout(() => {
                typed.remove();
            }, 1000);
        }
    }, speed);
}
function checkScore() {
    if (score === guessing.length - 1) {
        return;
    }
    else{
        Input.innerHTML = '';
        found[score] = minInput;
        score++;
        countFound.innerHTML = score;
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
typingText(loader, 1);
launchGame.addEventListener('click', function () {
    header.remove();
    mainGame.classList.remove('none');
})
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
            checkCountRotate = 0;
            for (let i = 0; i < guessing.length; i++) {
                if (minInput === guessingMin[i]) {
                    checkScore();
                    overlay.classList.add('none');
                    return;
                }
                checkCountRotate++;
            }
            console.log(checkCountRotate);
            if (checkCountRotate === guessing.length) {
                {
                    switch(erreur){
                        case 0:
                            Input.innerHTML = '';
                            erreur++;
                            document.querySelector('.error1').classList.add('lightBlue');
                            break;
                        case 1:
                            Input.innerHTML = '';
                            erreur++;
                            document.querySelector('.error2').classList.add('lightBlue');
                            break;
                        case 2:
                            Input.innerHTML = '';
                            erreur++;
                            document.querySelector('.error3').classList.add('lightBlue');
                            break;
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
        if (e.code === "Key"+letters[z] || e.code === letters[z] || e.key === '-') {
            if(overlay.classList[0] === 'none'){
            removenone();
            }
            document.querySelector('#Input').innerHTML += e.key
            return;
        }
    }
})


// Legacy Code


// Plus.addEventListener('click', function(){
//     testWidth = testWidth + 50;
//     document.querySelector('.fill').style.width = testWidth + 'px';
// })