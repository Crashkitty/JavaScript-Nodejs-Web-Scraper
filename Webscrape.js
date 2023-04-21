const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.example.com')
  .then(response => {
    const $ = cheerio.load(response.data);
    const links = $('a');
    const results = [];

    links.each((i, link) => {
      results.push({
        title: $(link).text(),
        url: $(link).attr('href')
      });
    });

    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });
