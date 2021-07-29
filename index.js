
// $("#myWorklink").click(function(){
//     console.log("Scroll to My Work");
// });


$("#WECYCLEbutton").on("click", function() {
    console.log("Hey a click occurred!");
  });
  

$("#myWorklink").click(function() {
    $('html, body').animate({
        scrollTop: $("#myWork").offset().top
    }, 2000);
});

