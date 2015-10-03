(function () {
    "use strict";
    //problem
    //in async for loop
    for (var index = 0; index < 3; index++) {
        //solution
        //closer
        /*(function (index) {*/
        setTimeout(function () {
            console.log(index);
        }, 1000);
        //solution
        /* })(index)*/
    }


    //instead of creating self executing function
    for (let index = 0; index < 3; index++) {
        setTimeout(function () {
            console.log(index);
        }, 1000)
    }

    //Events, async modules and in browser Dom Events
    //for (var i = 1; i <= 5; i++) {
    //    var item = document.createElement("LI");
    //    item.appendChild(document.createTextNode("Item " + i));
    //    let j = i;
    //    item.onclick = function (ev) {
    //        console.log("Item " + j + " is clicked.");
    //    };
    //    list.appendChild(item);
    //}
})();

//more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let