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
var result = document.querySelector('.result');
var afterGame = document.querySelector('.afterGame');
var relaunch = document.querySelector('.relaunch');
var classError = ['error1','error2','error3'];
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Semicolon', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var checkCountRotate = 0;
var score = 0;
var erreur = 0;
var found = [];
var foundPos = 0;
var check;
var index;
const guessing = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'Java', 'Bash', 'Shell', 'PowerShell','C#','PHP', 'C++', 'Typescript', 'C', 'Ruby','Go','Assembly','Swift','Kotlin','R','VBA','Objective-C','Scala','Rust','Dart','Elixir','Clojure','WebAssembly'];
const guessingMin = [];
const modalContentArray = [
    {name: 'HTML', description: 'HyperText Markup Language (HTML) is the standard markup language for creating web pages. It is used for creating pages for the World Wide Web, including mobile apps and other digital online services.'},
    {name: 'CSS', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology for the World Wide Web, alongside HTML and JavaScript.'},
    {name: 'JavaScript', description: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-parthicular. It is dynamic because it is not a static language, but it is a weakly typed language because it is not strongly or strictly typed.'},
    {name: 'SQL', description: 'Structured Query Language (SQL) is a programming language used in database management systems. It is used for creating and managing tables, and for retrieving data from those tables.'},
    {name: 'Python', description: 'Python is a high-level, interpreted, object-oriented programming language. It is designed to be highly readable and easily extensible, but also highly efficient. Python is commonly used in web development, data science, and scientific computing.'},
    {name: 'Java', description: 'Java is a programming language and computing platform first released by Sun Microsystems in 1995. It is a concurrent, class-based, object-oriented, general-purpose, and garbage-collected dynamic programming language.'},
    {name: 'Bash', description: 'Bash is a UNIX command language, shell, and scripting language. It is the default shell on most UNIX systems. It is also the default shell for most Linux distributions.'},
    {name: 'Shell', description: 'Shell is a UNIX command language, shell, and scripting language. It is the default shell on most UNIX systems. It is also the default shell for most Linux distributions.'},
    {name: 'PowerShell', description: 'PowerShell is a Microsoft Windows command-line interface (CLI) for the Microsoft Windows operating system. It is a fully-featured, open-source command-line shell that can be used to interact with the operating system.'},
    {name: 'C#', description: 'C# is a multi-parthicular, object-oriented, general-purpose, component-based programming language. It is a static, strongly typed, compiled programming language.'},
    {name: 'PHP', description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. PHP code can be embedded into HTML.'},
    {name: 'C++', description: 'C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.'},
    {name: 'Typescript', description: 'Typescript is a programming language developed by Microsoft. It is intended to be a simple, yet powerful, type-safe, and modern programming language.'},
    {name: 'C', description: 'C is a general-purpose, imperative, imperative-procedural programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.'},
    {name: 'Ruby', description: 'Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan.'},
    {name: 'Go', description: 'Go is a statically-typed, compiled, compiled programming language that is designed to be a faster, more flexible, and more robust replacement for C. It is currently one of the most popular programming languages in the world.'},
    {name: 'Assembly', description: 'Assembly is a programming language that is used to create computer programs that can be executed on a computer. Assembly is a low-level programming language, and is used to create computer programs that can be executed on a computer.'},
    {name: 'Swift', description: 'Swift is a general-purpose, multi-parthicular, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, and Linux.'},
    {name: 'Kotlin', description: 'Kotlin is a general-purpose, multi-parthicular, compiled programming language developed by JetBrains. It is designed to be a modern, safe, and flexible programming language.'},
    {name: 'R', description: 'R is a programming language developed by the American Statistical Association. It is a language for statistical computing and graphics.'},
    {name: 'VBA', description: 'Visual Basic for Applications (VBA) is a programming language developed by Microsoft. It is a general-purpose, object-oriented, and integrated development environment (IDE) for developing Microsoft Windows programs.'},
    {name: 'Objective-C', description: 'Objective-C is a general-purpose, object-oriented, compiled programming language developed by Apple Inc. for use in the iPhone, iPad, and iPod touch.'},
    {name: 'Scala', description: 'Scala is a general-purpose, multi-parthicular, compiled programming language developed by the Scala programming language. It is designed to be a functional language.'},
    {name: 'Rust', description: 'Rust is a general-purpose, compiled, compiled programming language developed by the Rust programming language. It is designed to be a functional language.'},
    {name: 'Dart', description: 'Dart is a general-purpose, compiled, compiled programming language developed by the Dart programming language. It is designed to be a functional language.'},
    {name: 'Elixir', description: 'Elixir is a general-purpose, compiled, compiled programming language developed by the Elixir programming language. It is designed to be a functional language.'},
    {name: 'Clojure', description: 'Clojure is a general-purpose, compiled, compiled programming language developed by the Clojure programming language. It is designed to be a functional language.'},
    {name: 'WebAssembly', description: 'WebAssembly is a general-purpose, compiled, compiled programming language developed by the WebAssembly programming language. It is designed to be a functional language.'}
]
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
        score++;
        result.innerHTML = 'Vous avez gagné !';
        mainGame.classList.add('none');
        afterGame.classList.remove('none');
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
function checkAlreadyGuess(){
    for (let a = 0; a < found.length; a++) {
        if (found[a] === minInput) {
            foundPos = a;
            return true;
        }
    }
    return false;
}
function contentModal(indexContent){




    
    // d'abord , récuper l'index de l'item voulu, puis récuper le contenu de l'item. une fois le contenu recupéré , l'écrire dans une div dans une modal pour pouvoir l'afficher après. la modal doit contenir une croix pour pouvoir la fermer mais aussi une case à cocher qui devras rester cocher si elle l'est , jusqu'a changement de l'utilisateur, afin  de fermer automatiquement la modal après 2s.







}
typingText(loader, 1);
launchGame.addEventListener('click', function () {
    header.classList.add('none');
    mainGame.classList.remove('none');
})
overlay.addEventListener('click', function(){
    if (Input.innerHTML ==='') {
        none();
    }
});

window.addEventListener('keydown', function checking(e) {
    if (Input.innerHTML !== '') {
        if (e.code === "Enter"){
            minInput = Input.innerHTML.toLowerCase();
            checkCountRotate = 0;
            for (let i = 0; i < guessing.length; i++) {
                if (minInput === guessingMin[i]) {
                    index = i;

                    check = checkAlreadyGuess();
                    if (check === true) {
                        overlay.classList.add('none');
                        Input.innerHTML = '';
                        return;
                    }
                    checkScore();
                    overlay.classList.add('none');
                    found[foundPos]= guessingMin[i];
                    foundPos++;
                    return;
                }
                checkCountRotate++;
            }
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
                            result.innerHTML = "Vous avez perdu !<br>Vous avez trouvé "+score+" langages présents dans l'image";
                            mainGame.classList.add('none');
                            afterGame.classList.remove('none');
                            break;
                    }
                    overlay.classList.add('none');
                    return;
                }
            }
        }
        if (e.code ==='Backspace'){
            Input.innerHTML = Input.innerHTML.slice(0, -1);
            return;
        }    
    }
    for (let z = 0; z < letters.length; z++) {
        if (e.code === "Key"+letters[z] || e.code === letters[z] || e.key === '-' || e.key ==='#' || e.key === '+') {
            if(overlay.classList[0] === 'none'){
            removenone();
            }
            document.querySelector('#Input').innerHTML += e.key
            return;
        }
    }
})
relaunch.addEventListener('click', function(){
    score = 0;
    erreur = 0;
    found = [];
    countFound.innerHTML = score;
    for (let z = 0; z < classError.length; z++) {
        if (document.querySelector('.'+classError[z]).classList.contains('lightBlue')) {
            document.querySelector('.'+classError[z]).classList.remove('lightBlue');
        }  
    }
    afterGame.classList.add('none');
    header.classList.remove('none');
})


// Legacy Code


// Plus.addEventListener('click', function(){
//     testWidth = testWidth + 50;
//     document.querySelector('.fill').style.width = testWidth + 'px';
// })