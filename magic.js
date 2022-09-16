$(document).ready(function(){
    //variable//
   $surface=$('surface');
   $car=$('car');
   
   //keypress event//
   $(document).on('keypress', function(e){
       if(e.which==13){
           $($surface).toggleclass('moveRight');
           $($car).toggleclass('moveRight');
       }

   });

});