import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

import {Builder} from 'selenium-webdriver';

class Utils{
     constructor(){
         this.webdriver = webdriver;
         
     }

     async startUp(){
        
        
        const chromeOptions =  new chrome.Options();
        chromeOptions.addArguments('"start-maximized"');
        chromeOptions.excludeSwitches('test-type');
        chromeOptions.windowSize({width:1920,height:1080});
        
        this.webdriver.promise.USE_PROMISE_MANAGER = false;
        const caps = {browserName: 'chrome', 
        version: '70.0',
        enableVNC: true,
        enableVideo: true  };
        
        
        const dirver  = await new  this.webdriver.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities()
        .forBrowser('chrome')
        .setChromeOptions()
        .setLoggingPrefs()
        .build();




        return dirver
     }
}
 module.exports = Utils;

