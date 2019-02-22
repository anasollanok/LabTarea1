var assert = require("assert");
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Module 1', () => {
  it('Checking module 1 appearances', () => {
      browser.url('/');
      var modulo1 = $(".modulo1");
      var display = modulo1.getCSSProperty('display');
      var testDisplay = '';
      const capabilities = browser.options.capabilities;

      if (capabilities.browserName === 'chrome'){
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;
          if (deviceName == 'iPad' || deviceName == 'Pixel 2'){
            testDisplay = 'none';
          }
        }
        else{
          testDisplay = 'block';
        }
      }
      assert.equal(display.value, testDisplay);


      /*else if (capabilities.browserName === 'firefox') {
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;

        }
        else{
          var module1 = $(".modulo1");
          assert(module1.ELEMENT != null);
        }
      }
      else {
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;
          if (deviceName == 'iPhone X' || deviceName == 'Pixel 2'){

          }
          else {

          }
        }
        else{
          var module1 = $(".modulo1");
          assert(module1.ELEMENT != 'undefined');
        }
      }*/
  });
});

describe('Module 2', () => {
  it('Checking module 2 appearances', () => {
      browser.url('/');
      var modulo2 = $(".modulo2");
      var display = modulo2.getCSSProperty('display');
      var testDisplay = '';
      const capabilities = browser.options.capabilities;

      if (capabilities.browserName === 'chrome'){
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;
          if (deviceName == 'Pixel 2'){
            testDisplay = 'block';
          }
          else if (deviceName == 'iPad') {
            testDisplay = 'none';
          }
        }
        else{
          testDisplay = 'block';
        }
      }
      assert.equal(display.value, testDisplay);


      /*else if (capabilities.browserName === 'firefox') {
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;

        }
        else{
          var module1 = $(".modulo1");
          assert(module1.ELEMENT != null);
        }
      }
      else {
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;
          if (deviceName == 'iPhone X' || deviceName == 'Pixel 2'){

          }
          else {

          }
        }
        else{
          var module1 = $(".modulo1");
          assert(module1.ELEMENT != 'undefined');
        }
      }*/
  });
});

describe('Module 3', () => {
  it('Checking module 3 appearances', () => {
      browser.url('/');
      var modulo3 = $(".modulo3");
      var display = modulo3.getCSSProperty('display');
      var testDisplay = '';
      const capabilities = browser.options.capabilities;

      if (capabilities.browserName === 'chrome'){
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;
          if (deviceName == 'Pixel 2'){
            testDisplay = 'none';
          }
          else if (deviceName == 'iPad') {
            testDisplay = 'block';
          }
        }
        else{
          testDisplay = 'block';
        }
      }
      assert.equal(display.value, testDisplay);


      /*else if (capabilities.browserName === 'firefox') {
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;

        }
        else{
          var module1 = $(".modulo1");
          assert(module1.ELEMENT != null);
        }
      }
      else {
        if (capabilities['goog:chromeOptions']){
          const deviceName = capabilities['goog:chromeOptions'].mobileEmulation.deviceName;
          if (deviceName == 'iPhone X' || deviceName == 'Pixel 2'){

          }
          else {

          }
        }
        else{
          var module1 = $(".modulo1");
          assert(module1.ELEMENT != 'undefined');
        }
      }*/
  });
});
