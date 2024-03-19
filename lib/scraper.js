const axios = require('axios')
const cheerio = require('cheerio')

async function getHtml(url) {
    const { data } = await axios.get(url, {
        headers: {
            'Content-Type': 'text/html',
        },
    })
    return data
}

async function getDeOfHet(html) {
    const $ = cheerio.load(html)
    return $('#box').find('#content').find('h2').find('span').text()
}

module.exports = { getHtml, getDeOfHet }
