let anh = document.getElementById("ars")


let speed =10
function chan1() {
    anh.style.left = parseInt(anh.style.left) - speed + "px";
    if (parseInt(anh.style.left) < 0) {
        speed = 0
    }
    if (parseInt(anh.style.left) > 780) {
        speed = 0
    }
    if (parseInt(anh.style.top) < 0) {
        speed = 0
    }
    if (parseInt(anh.style.top) < 0) {
        speed = 1200
    }
}
chan1()




function dichuyen(){

    window.addEventListener("keydown",(evt) => {
    if (evt.keyCode ==37){
        if(parseInt(anh.style.left) >= 0){
        anh.style.left = parseInt(anh.style.left) - 20 + "px";
    }
    }
    if (evt.keyCode ==39){
        if(parseInt(anh.style.left) <= 780){
        anh.style.left = parseInt(anh.style.left) + 20 + "px";
    }
    }
    if (evt.keyCode ==38){
        if (parseInt(anh.style.top) > 0){
        anh.style.top = parseInt(anh.style.top) - 20 + "px";
    }
    }
    if (evt.keyCode ==40){
        if (parseInt(anh.style.top) < 1200){
        anh.style.top = parseInt(anh.style.top) + 20 + "px";
        }
    }
})
              }
dichuyen()


function bd(){
    move()
}
// Sân bóng di chuyển;
let duong = document.getElementById('myCanvas');
function move() {
    duong.style.top = parseInt(duong.style.top)+1 +'px';
    requestAnimationFrame(move);
    if (parseInt(duong.style.top) >=0) {
        duong.style.top = -100+'px'
    }

}
