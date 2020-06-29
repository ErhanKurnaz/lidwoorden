import { getHtml, getDeOfHet } from './lib/scraper'

async function go() {
    const html = await getHtml(`https://www.welklidwoord.nl/${process.argv[2] || ''}`)
    console.log(await getDeOfHet(html))
}

go()
