var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({data: "deepak"});
    }, 2000)
})
p1.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
})


