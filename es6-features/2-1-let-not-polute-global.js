(function () {
    "use strict";
    let lVar = "outer"; //It has own scope
    var wlVar = "outer"; //It is global to functional scope
    if (lVar && wlVar) {
        let lVar = "blocked";
        var wlVar = "blocked";
        console.info(lVar);
        console.info(wlVar);
    }
    console.info(lVar);
    console.info(wlVar);
    let lVar = "blocked";
    var wlVar = "blocked";
    console.log("After redefine"); // ??
    console.info(lVar);
    console.info(wlVar);
})
();