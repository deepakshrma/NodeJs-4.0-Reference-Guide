(function () {
    "use strict";

   const isDefined = true;
    console.info(isDefined);

   /**
    *
   const isDefined = false;
   console.info(isDefined);
   */
    if(isDefined){
        const isDefined = false;
        console.info(isDefined);
    }

})
();




















//output
//true
//false  ////due to block scope
