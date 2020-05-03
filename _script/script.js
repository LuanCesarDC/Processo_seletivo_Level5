$(document).ready(function(){
    $(".button_menu").click(function(){
        $(".menu").toggleClass("show");
    })
})
    

$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=5S0OhioTtOCkLvlYGiKQOEpy9K9mn2aTRRPdzwi8",
    success: function(whatyougot){
        if(whatyougot.media_type == "video"){
            document.getElementById("img_day").innerHTML = "<h2>Vídeo do Dia</h2> <iframe width='315' height='236' src='"+ whatyougot.url +"'> </iframe>"   
        }else{
            document.getElementById("img_day").innerHTML = "<h2>Imagem do Dia</h2> <img src='"+whatyougot.url+"'style='width:100%;'/>";
        }
        document.getElementById("img_title").innerText = whatyougot.title;
        document.getElementById("explanation").innerText = whatyougot.explanation;
    }
});

$.ajax({
    url: "https://covidgoias.ufg.br/service/summary/data?cd_geocmu=52&lang=pt-br",
    success: function(whatyougot){
        document.getElementById("confirm").innerText = whatyougot.resumed.confirmados;
        document.getElementById("suspeito").innerText = whatyougot.resumed.suspeitos;
        document.getElementById("mortes").innerText = whatyougot.resumed.obitos;
    }
});
