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
          else if (capabilities['goog:chromeOptions'].mobileEmulation.deviceMetrics.width < 960){
            testDisplay = 'none';
          }
        }
        else{
          testDisplay = 'block';
        }
      }
      else if (capabilities.browserName === 'firefox'){
        testDisplay = 'block';
      }
      else if (capabilities.browserName === 'safari'){
        testDisplay = 'none';
      }
      assert.equal(display.value, testDisplay);
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
          else if (capabilities['goog:chromeOptions'].mobileEmulation.deviceMetrics.width < 600){
            testDisplay = 'block';
          }
          else if (capabilities['goog:chromeOptions'].mobileEmulation.deviceMetrics.width < 960){
            testDisplay = 'block';
          }
        }
        else {
          testDisplay = 'block';
        }
      }
      else if (capabilities.browserName === 'firefox'){
        testDisplay = 'block';
      }
      else if (capabilities.browserName === 'safari'){
        testDisplay = 'none';
      }
      assert.equal(display.value, testDisplay);
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
          else if (capabilities['goog:chromeOptions'].mobileEmulation.deviceMetrics.width < 600){
            testDisplay = 'none';
          }
        }
        else {
          testDisplay = 'block';
        }
      }
      else if (capabilities.browserName === 'firefox'){
        testDisplay = 'block';
      }
      else if (capabilities.browserName === 'safari'){
        testDisplay = 'block';
      }
      assert.equal(display.value, testDisplay);
    });
});
