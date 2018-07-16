(function ($) {
  "use strict";
  
  jQuery(document).ready(function($){
    startAnimation();
    function startAnimation(){
      jQuery('.skill-bar').each(function(){
  
        jQuery(this).find('.skillbar').animate({
          width:jQuery(this).attr('data-percent')
        },6000); 
      });
    }

      
  });
  
 
}(jQuery));
