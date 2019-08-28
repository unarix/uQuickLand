(function ($) {
    "use strict";

    $.fn.extend({ 

      countdown100: function(tx) {

        return this.each(function() {
          var obj = $(this);
                      
          var clock = $(obj).FlipClock(tx/1000, {
            clockFace: 'DailyCounter',
            countdown: true
          });


        });
      }
    });

    

})(jQuery);