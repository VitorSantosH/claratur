const axios = require('axios');






async function insta() {

    //defina aqui o token gerado após clicar em  "Generate Token"
    const token = "IGQVJYTnhIRWxPSjhMT3hTNUJsbnhJNDB1ZAzRmanZA0RUpYdzhaWmNfc2VwbzlWUU5jQXFUY3JFbmdORTVDUEhKUGluUFpwWmJLSFJIRWdRcTk5U2tqREdqRGg4cVpJNGw2bWxsdFpuM053endvU1VmcwZDZD";

    const url = 'https://graph.instagram.com/me/media?access_token=' + token + '&fields=media_url,media_type,caption,permalink';
    //percorremos as imagens recebidas



    var obj =  await axios({
        method: 'get',
        url: url,
    })
        .then(res => {


            const reader = res.data.data
            //console.log(reader)


            let images = reader;
            images_content = '<div class="row">';
            for (let c = 0; c < images.length; c++) {

                let pic = images[c];
                let caption = pic.caption !== null ? pic.caption : '';
                images_content += '<div class="col-md-3"><a target="_target" href="' + pic.permalink + '"><img title="' + caption + '" alt="' + caption + '" src="' + pic.media_url + '" width="128"></a></div>';
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



module.exports = insta;