

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
let idx2 = 0;

function carrossel() {

    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    let largura = document.getElementById('img').offsetWidth 
   
    if(document.getElementById('img').offsetWidth == null ) {
        return 
    }

    imgs.style.transform = `translateX(${-idx * largura}px)`


    const circulos = document.querySelectorAll('#circulos img')

    for (let i = 0; i < circulos.length; i++) {

        if (circulos[i].getAttribute('value') == idx) {
            document.getElementById(`circulo${idx}`).style.backgroundColor = 'white'
        } else {
            document.getElementById(`circulo${i}`).style.backgroundColor = ''
        }


    }



}


setInterval(carrossel, 5000);




const pacotesDiv = document.getElementById('cardsPacotes')
const pacotesImgs = document.querySelectorAll("#cardsPacotes .cards");
const buttonPacotes = document.getElementById('clickPacotes');
const buttonPacotes2 = document.getElementById('clickPacotes2');

buttonPacotes2.onclick = function () {
    carrossel2Menos();
}

buttonPacotes.onclick = function () {
    carrossel2();
}

function carrossel2() {

    // pacotesImgs[idx2].style.display = "none"

    idx2++;

    if (idx2 > pacotesImgs.length - 3) {
        idx2 = 0;
    }



    let largura = (document.querySelectorAll('#cardsPacotes .cards')[0].offsetWidth + 30);

    pacotesDiv.style.transform = `translateX(${(-idx2 * largura)}px)`


}

function carrossel2Menos() {

    // pacotesImgs[idx2].style.display = "none"



    if (idx2 <= 0) {
        return
    }
    idx2 = idx2 - 1;


    let largura = (document.querySelectorAll('#cardsPacotes .cards')[0].offsetWidth + 30);

    pacotesDiv.style.transform = `translateX(${(-idx2 * largura)}px)`


}


var purecookieTitle = "Usamos cookies.",
    purecookieDesc = "Usamos cookies e outras tecnologias de rastreamento para melhorar sua experiência de navegação em nosso site, mostrar conteúdo personalizado e anúncios direcionados, analisar o tráfego de nosso site e entender de onde vêm nossos visitantes."
purecookieLink = '<a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies" target="_blank">O que são cookies?</a>'

purecookieButton = "OK"; function pureFadeIn(e, o) { var i = document.getElementById(e); i.style.opacity = 0, i.style.display = o || "block", function e() { var o = parseFloat(i.style.opacity); (o += .02) > 1 || (i.style.opacity = o, requestAnimationFrame(e)) }() } function pureFadeOut(e) { var o = document.getElementById(e); o.style.opacity = 1, function e() { (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e) }() } function setCookie(e, o, i) { var t = ""; if (i) { var n = new Date; n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), t = "; expires=" + n.toUTCString() } document.cookie = e + "=" + (o || "") + t + "; path=/" } function getCookie(e) { for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) { for (var n = i[t]; " " == n.charAt(0);)n = n.substring(1, n.length); if (0 == n.indexOf(o)) return n.substring(o.length, n.length) } return null } function eraseCookie(e) { document.cookie = e + "=; Max-Age=-99999999;" } function cookieConsent() { getCookie("purecookieDismiss") || (document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + " " + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + "</a></div></div>", pureFadeIn("cookieConsentContainer")) } function purecookieDismiss() { setCookie("purecookieDismiss", "1", 7), pureFadeOut("cookieConsentContainer") } window.onload = function () { cookieConsent() }


async function insta() {


    //defina aqui o token gerado após clicar em  "Generate Token"
    // const token = "IGQVJYTnhIRWxPSjhMT3hTNUJsbnhJNDB1ZAzRmanZA0RUpYdzhaWmNfc2VwbzlWUU5jQXFUY3JFbmdORTVDUEhKUGluUFpwWmJLSFJIRWdRcTk5U2tqREdqRGg4cVpJNGw2bWxsdFpuM053endvU1VmcwZDZD";
    const token = 'IGQVJVV1N3VjZADaFRQT0RhWGJ2eGF5QXhQTWN5cklBYnVtLUl5RkxwODdUOTBIYkNNbTRHLXFHdjNpSXRVN2pnRlIxMkRYWi1nc3BkbzlRWlZA6TF9wRFUtQTFzRjkxZAlhUWmNtMS1rSmhKTlNsTmVtVgZDZD'
    const url = 'https://graph.instagram.com/me/media?access_token=' + token + '&fields=media_url,media_type,caption,permalink';
    //percorremos as imagens recebidas



    var obj = await fetch(url)
        .then(res => res.json())
        .then(res => {

            console.log(res)
            const reader = res.data
            //console.log(reader)


            let images = reader;
            images_content = '<div class="insta">';
            for (let c = 0; c < 8; c++) {

                let pic = images[c];
                let caption = pic.caption !== null ? pic.caption : '';
                images_content += '<div class="postInsta"><a target="_target" href="' + pic.permalink + '"><img title="' + caption + '" alt="' + caption + '" src="' + pic.media_url + '"></a></div>';
            }
            images_content += '</div>';
            // document.getElementById('insta').innerHTML = images_content;

            return images_content


        })
        .catch((err) => {
            console.log(err)
        })





    return obj
}




window.onload = async function () {

    document.getElementById('insta').innerHTML = await insta();

}


function enviarEmail() {

    if (document.getElementById('Nome').value == "") {
        return
    }
    const data = {
        name: document.getElementById('Nome').value,
        email: document.getElementById('E-mail').value,
        message: document.getElementById('Mensaagem').value
    }

    fetch('/email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(err => err.json())
        .catch(err => {
            console.log(err)
        })


    document.getElementById('Nome').value = ""
    document.getElementById('E-mail').value = ""
    document.getElementById('Mensaagem').value = ""

    return
}

document.getElementById('EnviarEmail').onclick = enviarEmail();

/*
 fetch("/insta")
        .then(response => {
            return response.json();
        })
        .then(res => {
           
            document.getElementById('insta').innerHTML = res
            return 
        })
        .catch(err => {
            console.log(err)
        })


*/