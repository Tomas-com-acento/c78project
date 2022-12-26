img = [
    "Xereta.png", "Xereta(2).png", "Xereta (1).png"
];
nome = [
    "Xereta(célula)", "Xereta", "Aldeão Xereta"
];
var i = 0;
function update() {
    i++;
    img[i];
    nome[i];
    document.getElementById("spore").src = img[i];
    document.getElementById("nome").innerHTML = nome[i];
    if (i > 3) { i = 0 ;}
}