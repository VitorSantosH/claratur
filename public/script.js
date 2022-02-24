const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;


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