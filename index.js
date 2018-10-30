var fs = require('fs');
var path = require('path');

var scrape = require('website-scraper');
var randomstring = require('randomstring');

var options = {
  urls: ['https://github.com', 'https://hristo2612.github.io/'],
  directory: path.join(__dirname, '.' + randomstring.generate(5)) // quick solution for existing directory..
};
 
scrape(options).then((result) => {
    var regex = /(https?:\/\/[^\s]+)/g;
    result.forEach((page) => {
        var links = page.text.match(regex);
        console.log('Links for: ', page.url);
        console.log(links || 'Sorry, no links found :(');
    });
}).catch((err) => {
    console.log(err);
});