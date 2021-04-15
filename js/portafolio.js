(function($) {
  "use strict"; 

  $( "#pdf" ).on( "click", function( event ) {
    console.log("Hello")
  });

  $('body').on('scroll', function (e){
    if($("#services").is(":visible")){
      console.log("about is visible");
    } else{
        console.log("The paragraph  is hidden.");
    }
  });

  $("#yo").on('click', function(e) {
    e.preventDefault();
    console.log("Hello")
    // var target = $(this).attr('#about');
    // $('html, body').animate({
    //   scrollTop: ($(target).offset().top)
    // }, 2000);
 });

 
})
