$( document ).ready(function(){
      $( "#button1" ).click(function(){
        $( ".contacts" ).scroll(); 
      });
      $( ".contacts" ).scroll(function(){ 
        $( "span" ).text( "Scroll" ) 
                   .css({ 
                     "display": "inline", 
                     "color": "red"
                   })
                   .fadeOut( "fast" );
      });
    });