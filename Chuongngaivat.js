let chel = document.getElementById('chel1');
let mu = document.getElementById('mu1');
let li = document.getElementById('liver1');
let mciti = document.getElementById('manciti1');
let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let diem1 = document.getElementById("diem")


function fcchay() {
    chel.style.top = parseInt(chel.style.top)+randomSpeed() +'px';
    if (parseInt(chel.style.top) >1250) {
        chel.style.top = randomTop()+'px'
        chel.style.left = randomLeft()+'px'
        count1++
    }
    if(chel.style.top==anh.style.top && chel.style.left==anh.style.left){
        alert("game over")
    }
    mu.style.top = parseInt(mu.style.top)+randomSpeed() +'px';
    if (parseInt(mu.style.top) >1250) {
        mu.style.top = randomTop()+'px'
        mu.style.left = randomLeft()+'px'
        count2++
    }
    li.style.top = parseInt(li.style.top)+randomSpeed() +'px';
    if (parseInt(li.style.top) >1250) {
        li.style.top = randomTop()+'px'
        li.style.left = randomLeft()+'px'
        count3++
    }
    mciti.style.top = parseInt(mciti.style.top)+randomSpeed() +'px';
    if (parseInt(mciti.style.top) >1250) {
        mciti.style.top = randomTop()+'px'
        mciti.style.left = randomLeft()+'px'
        count4++
    }    requestAnimationFrame(fcchay);

diem1.innerHTML = count1+count2 +count3 +count4
}

function randomTop() {
    return Math.random()*-400;
}
function randomLeft() {
    return Math.random()*760+20;
}


function randomSpeed() {
    return Math.random()*10;
}
function bd(){
fcchay()
}
//day la ham bat dau