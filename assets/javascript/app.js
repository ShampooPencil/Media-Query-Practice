console.log("TESTING")
var MenuClone = ".Menu"
var width = $(window).width();
  console.log(width);
    $(document).ready(function(){
        $("#toggle").click(function(){
            $(MenuClone).css({"background-color": "white", "position": "relative", "width": "40%", "margin-left": "60%"}).slideToggle("slow");
    });
    // $(window).ready(function(){
    //     if(width > 601){
    //         $(".Menu").show();
    //     }
    // })
    // $(document).ready(function(){
    //     console.log(width)
    //     if(width > 601){
    //         $(".Menu", "a").css({"display": "block"});
    //     }
    // })

    $(window).resize(function() {
        if ($(window).width() > 901) {
            $(".Menu").css({"background-color": "rgb(190, 215, 200)", "position": "relative", "width": "40%", "margin-left": "60%", "display": "block"});

        }
   
      });
      $(window).resize(function() {
        if ($(window).width() < 901) {
            $(".Menu").css({"background-color": "white", "position": "relative", "width": "40%", "margin-left": "60%", "display": "none"});

        }
   
      });
    console.log(width);
    // if(width > 601) {
    //     $(window).resize(function() {
    //         // Do something
    //         console.log("True!")
    //         $(".Menu").css({"display": "block", "background-color": "pink"});
            
    //     });
    // }
    // if(width <= 601) {
    //     $(window).resize(function() {
    //         // Do something
    //         console.log("True!")
    //         $(".Menu").css({"display": "none", "background-color": "pink"});
            
    //     });
    // }
    
        // $(".Menu").css({"display": "block", "background-color": "none"});
   
        // action for screen widths including and above 768 pixels 
    
  });
