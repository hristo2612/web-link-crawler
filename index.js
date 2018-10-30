var fs = require('fs');
var path = require('path');

var scrape = require('website-scraper');
var randomstring = require('randomstring');

var options = {
  urls: ['http://github.com/hristo2612/'],
  directory: path.join(__dirname, '.' + randomstring.generate(5)) // quick solution for existing directory..
};
 
scrape(options).then((result) => {
    var regex = /(https?:\/\/[^\s]+)/g;
    var matches = result[0].text.match(regex);
    console.log(matches);
}).catch((err) => {
    console.log(err);
});