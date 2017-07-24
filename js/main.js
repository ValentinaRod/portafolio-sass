//carousel

$(document).ready(function(){
    // Activar el carousel
    $("#myCarousel").carousel();
    
    // indicadores del carouseñ
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });

   // Controloles del carousel.
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
         interval: 3000
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
         interval: 3000
    });
});  