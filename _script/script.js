$(".button_menu").click(function(){
    $(".menu").show();
    $(".mensagem").hide();
    $(".button_menu").hide();
    $(".logo").hide();
})
$(".button_close").click(function(){
    $(".menu").hide();
    $(".mensagem").show();
    $(".button_menu").show();
    $(".logo").show();
})