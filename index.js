
// $("#myWorklink").click(function(){
//     console.log("Scroll to My Work");
// });


$("#WECYCLEbutton").on("click", function() {
    console.log("Hey a click occurred!");
  });


$("#menu").on("click", function() {
    document.getElementById("myNav").style.width = "100%";
  });

  $("#closebutton").on("click", function() {
    document.getElementById("myNav").style.width = "0%";
  });
  
// $("#myWorklink").click(function() {
//     $('html, body').animate({ 
//         scrollTop: $("#myWork").offset().top
//     }, 2000);
// });