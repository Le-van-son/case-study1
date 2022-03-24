let chel = document.getElementById('chel1');
let mu = document.getElementById('mu1');
let li = document.getElementById('liver1');
let mciti = document.getElementById('manciti1');

function chelchay() {
    chel.style.top = parseInt(chel.style.top)+1 +'px';
    requestAnimationFrame(chelchay);
    if (parseInt(chel.style.top) >1250) {
        chel.style.top = -100+'px'
    }
    mu.style.top = parseInt(mu.style.top)+1 +'px';
    if (parseInt(mu.style.top) >1250) {
        mu.style.top = -100+'px'
    }
    li.style.top = parseInt(li.style.top)+1 +'px';
    if (parseInt(li.style.top) >1250) {
        li.style.top = -100+'px'
    }
    mciti.style.top = parseInt(mciti.style.top)+1 +'px';
    if (parseInt(mciti.style.top) >1250) {
        mciti.style.top = -100+'px'
    }
}
chelchay()


