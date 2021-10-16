import {default as axios} from 'axios';
import {JSDOM} from 'jsdom';

async function main() {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Mobile Safari/537.36',
    };
    const { data } = await axios.get('https://m.dcinside.com/board/programming', {
        headers: headers,
    });

    const dom = new JSDOM(data);

    const articleItems = dom.window.document.querySelectorAll('.gall-detail-lst > li:not(.adv-inner)');

    for (const li of articleItems) {
        const subject = li.querySelector('.subjectin').textContent;
        console.log(subject);
    }
}

main();