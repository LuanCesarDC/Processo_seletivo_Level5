$(".button_menu").click(function(){
    $(".menu").toggleClass("show");
})

$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=5S0OhioTtOCkLvlYGiKQOEpy9K9mn2aTRRPdzwi8",
    success: function(whatyougot){
        if(whatyougot.media_type == "video"){
            document.getElementById("img_day").innerHTML= "<h2>Vídeo do Dia</h2> <iframe width='315' height='236' src='"+ whatyougot.url +"'> </iframe>"   
        }else{
            document.getElementById("img_day").innerHTML="<h2>Imagem do Dia</h2> <img src='"+whatyougot.url+"'style='width:100%;'/>";
        }
    }
});

