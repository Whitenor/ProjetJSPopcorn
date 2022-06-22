let test = 
`<header>
    <h1 class="formateur papermaker starcraft">Alain</h1>
</header>
<section>
    <div class="exploratice statisfactory jeanine ">Pauline</div>
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
`
//function typing text
function typingText(text, speed) {
    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            document.getElementById("typed").innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}
typingText(test, 50);
