"use strict";
const https = require('https');

class Crawler {
    static getHtml(url) {
        function _httpsCrawler(resolve, reject) {
            https.get(url, function (res) {
                console.info('STATUS: ' + res.statusCode);
                console.info('HEADERS: ' + JSON.stringify(res.headers));
                var body = '';
                res.on('data', function(chunk) {
                    body += chunk;
                });
                res.on('end', function() {
                    resolve(body);
                });
            }).on('error', function (error) {
                reject(error)
            });
        }
        return new Promise(_httpsCrawler)
    }
}

var es6html = Crawler.getHtml('https://github.com/deepakshrma/NodeJs-4.0-Reference-Guide/tree/master/es6-features');

es6html.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
})


