let duong = document.getElementById('sando');
function move() {
    duong.style.top = parseInt(duong.style.top)+5 +'px';
    requestAnimationFrame(move);
    if (parseInt(duong.style.top) >=0) {
        duong.style.top = -100+'px'
    }
}
move();