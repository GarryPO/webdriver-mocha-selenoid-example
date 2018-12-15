import { until } from 'selenium-webdriver';
import logger from  './support/logger'



 class BasePage {

    constructor(webdriver) {
        this.driver = webdriver;
        this.logger = logger;
    }

    async getCurrentUrl() {
        return  this.driver.getCurrentUrl();
    }

    async waitForLocated(locator) {
        try {
            await this.driver.wait(until.elementsLocated(locator), 10000);
        } catch (e) {
            await logger.console.error(`Element with ${locator} was not located due to error: ${e.message}`);
            throw new Error(`Element with ${locator} was not located due to error: ${e.message}`)

        }
    }
    async waitForVisiable(locator) {
        try {
            const element = await this.driver.findElement(locator);
            await this.driver.wait(until.elementIsVisible(element), 10000)
        } catch (e) {
            await logger.error(`Element with ${locator} was not visiable  due to error: ${e.message}`);
            throw new Error(`Element with ${locator} was not visiable  due to error: ${e.message}`);
        }
    }
    async waitForDisplayed(locator) {
        await this.logger.info(`Waiting for element with ${locator} to be displayed`);
        await this.waitForLocated(locator);
        await this.waitForVisiable(locator);
        return  await this.driver.findElement(locator);
    }

    async click(locator) {
        const element = await this.waitForDisplayed(locator);
        await this.logger.info(`Trying to click element with ${locator}`)
        try {
            await element.click()
        } catch (err) {
            await logger.error(`Unable to click element with ${locator} due to error: ${err.message}`);
        }

    }

    async sendKeys(locator, keys) {
        try {
            await logger.info(`Trying to send ${keys} to element with locator :${locator}`)
           this.waitForDisplayed(locator);
           const element = await this.driver.findElement(locator);

            await element.sendKeys(keys);
        } catch (err) {
            await logger.error(`Unable to send keys to element with locator: ${locator} due to error: ${err.message}`);
            throw new Error(`Unable to send keys to element with locator: ${locator} due to error: ${err.message}`);
        }
    }

    async getText(locator){
        try {
            const element =  await this.waitForDisplayed(locator);
            return await element.getText();
        } catch (err) {
            await this.logger.error(`Unable to get text from elemet with locator ${locator} due to error: ${err.message}`)
        }
    }

}
 export default BasePage;


