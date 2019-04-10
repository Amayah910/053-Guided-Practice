$("#replyYes").click(function() {
  
  $("#homers-reply").text("yes") ;
  $("body").css("background-color", "lightpink");
});
  
    //Use this click handler to add changes to the CSS
    
    $("#replyNo").click(function() {
        $("#homers-reply").css("color" ,"aqua");
        $("#homers-reply").text("No") ;
    
});
