function slide() {
    var left = document.querySelector('.beaches');
    var left2 = document.querySelector('.mountain');
    left.scrollBy(-700, 0)
    left2.scrollBy(-700, 0)
}

function slide2() {
    var right = document.querySelector('.beaches');
    var right2 = document.querySelector('.mountain');
    right.scrollBy(700, 0)
    right2.scrollBy(700, 0)
}

$(document).ready(function () {
    $(".beaches").show();
    $(".mountain").hide();
       $("#showBeaches").click(function () {
         $(".mountain").hide();  
         $(".beaches").show();
       });
   
       $("#showMountains").click(function () {
         $(".beaches").hide();
         $(".mountain").show();
       });
     });

$(document).ready(function (){
    $(".beachdes").show();
    $(".mountdes").hide();
    $(".landdes").hide();
      $("#showBeaches").click(function (){
        $(".beachdes").show();
        $(".mountdes").hide();
        $(".landdes").hide();
      });
      $("#showMountains").click(function () {
        $(".beachdes").hide();
        $(".mountdes").show();
        $(".landdes").hide();
      })
});