import axios from 'axios'
import cheerio from 'cheerio'

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
    return $('#box').find('#content').find('h1').find('span').text()
}

export { getHtml, getDeOfHet }
