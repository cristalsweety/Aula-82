var tela = document.getElementById("canva");
var ctx = tela.getContext("2d");
var cor = "white"
var espe = "2"

function botao() {
    ctx.clearRect(0, 0, tela.width, tela.height);
}


var mouseEvent = "empty";
var lastX, lastY;



tela.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mouseDown";
}



tela.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}



tela.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}


tela.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var mouseX = e.clientX - tela.offsetLeft;
    var mouseY = e.clientY - tela.offsetTop;
    
    
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = espe;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(mouseX,mouseY);
        ctx.stroke();

    }

lastX = mouseX;
lastY = mouseY;

}
function borracha(){
cor = "#FFB673"
espe = 50



}
function desenhar(){
cor = "white"
espe = 2



}
