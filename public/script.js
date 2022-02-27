const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
let idx2 = 0;

function carrossel() {

    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    let largura = document.getElementById('img').offsetWidth;

    imgs.style.transform = `translateX(${-idx * largura}px)`


    const circulos = document.querySelectorAll('#circulos img')

    for (let i = 0; i < circulos.length   ; i++) {

        if (circulos[i].getAttribute('value') == idx) {
            document.getElementById(`circulo${idx}`).style.backgroundColor = 'white'
        } else {
            document.getElementById(`circulo${i}`).style.backgroundColor = ''
        }
    

    }



}


setInterval(carrossel, 4000);


const pacotesDiv  = document.getElementById('cardsPacotes')
const pacotesImgs = document.querySelectorAll("#cardsPacotes .cards");
const buttonPacotes = document.getElementById('clickPacotes');

buttonPacotes.onclick = function() {
    carrossel2();
}

function carrossel2() {

    // pacotesImgs[idx2].style.display = "none"

    idx2++;

    if (idx2 > pacotesImgs.length -3) {
        idx2 = 0;
    }

    

    let largura = ( document.querySelectorAll('#cardsPacotes .cards')[0].offsetWidth + 30);

    pacotesDiv.style.transform = `translateX(${(-idx2 * largura)}px)`


}


