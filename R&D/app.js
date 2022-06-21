let test = document.querySelector('#typed').getAttribute('data-typed-items')
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
typingText(test, 10);