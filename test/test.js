const  Utils  = require('../utils.js');
import { expect } from 'chai';
import BitlyPage from '../bitly_page.js';


describe('Testing BitLy shortening servis', function () {
    let driver, bitlyPage, utils, originalUrl;
    this.timeout(3000000);
    let bitlyURL = 'https://bitly.com/'

   
    before(async function(){
        utils = new Utils();
        driver = await utils.startUp();

        bitlyPage = new BitlyPage(driver);
        await driver.get(bitlyURL);

    })
    after(async function(){
        await driver.quit();
    })

    it('opens bitly  url', async function () {
        const realURl = await driver.getCurrentUrl();
        expect(realURl).to.equal(bitlyURL);

    })

    it('Shortens URL', async function(){
        const URL = 'https://www.ya.com/';
        const shortened = await bitlyPage.shortenUrl(URL);
        await driver.get(shortened);
        const resultUrl = await driver.getCurrentUrl();
        expect(resultUrl).to.equal(URL);
    } )


})