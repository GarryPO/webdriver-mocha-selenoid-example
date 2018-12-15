import { By } from 'selenium-webdriver';
import BasePage from './base_page.js';


const locators = {
    URL_INPUT: By.xpath('//input[@id="shorten_url"]'),
    SHORTEN_BUTTON: By.xpath('//input[@id="shorten_btn"]'),
    SHORTENED_URL: By.xpath('//*[@class="short-url"]')
}

 class BitlyPage extends BasePage {


    
    async typeUrlInToInPut(url) {
        await this.sendKeys(locators.URL_INPUT, url);
    }

    async pressShortenButton() {
        await this.click(locators.SHORTEN_BUTTON);
    }

    async shortenUrl(url) {
        await this.logger.info(`Shortening url: ${url}`);
        await this.typeUrlInToInPut(url);
        await this.pressShortenButton();
        const shortened = await this.getText(locators.SHORTENED_URL);
        return shortened;
    }
}
 export default BitlyPage;