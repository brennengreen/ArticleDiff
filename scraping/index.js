const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: `https://www.cnn.com/`,
    transform: function(body) {
        return cheerio.load(body);
    }
}