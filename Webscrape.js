// import the Axios library and the Cheerio library
// use Axios to make an HTTP GET request to the webpage we want to scrape
// when the response comes back, we load the HTML into a Cheerio object
// use Cheerio to select all the elements on the page
// loop through each element and extract its title and URL
// add the title and URL to an array called results
// log the results array to the console


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
