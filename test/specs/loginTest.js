var assert = require("assert");
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('HTML tests', () => {
    it('Check that username input element exists', ()=>{
      browser.url('/');
      var user= $('#username-input');
      assert.notEqual(user.ELEMENT , null);
    });

    it('Should do nothing when no data in any text field', ()=>{
        browser.url('/');
        const button = $('#submitButton');
        button.click();
        var titulo = browser.getTitle();
        assert.equal(titulo, "Login");
      });

      it('Should do nothing when no data in username text field', ()=>{
        browser.url('/');
        
        var pass = $('#password-input');
        pass.setValue('passwordcomplete2');

        const button = $('#submitButton');
        button.click();
        var titulo = browser.getTitle();
        assert.equal(titulo, "Login");
      }); 

      it('Should do nothing when no data in password text field', ()=>{
        browser.url('/');
        
        var user= $('#username-input');
        user.setValue('juan@tec.mx');

        const button = $('#submitButton');
        button.click();
        var titulo = browser.getTitle();
        assert.equal(titulo, "Login");
      }); 

      it('Should go somewhere when there is data in both text fields', ()=>{
        browser.url('/');
        
        var user= $('#username-input');
        user.setValue('juan@tec.mx');
        var pass = $('#password-input');
        pass.setValue('passwordcomplete2');

        const button = $('#submitButton');
        button.click();
        var titulo = browser.getTitle();
        assert.notEqual(titulo, "Login");
      }); 

      it('Check button size', ()=>{
        browser.url('/');

        const button = $('#submitButton');
        var btnSize = button.getSize();
        console.log("image size isss"+btnSize);
        assert(btnSize.width > btnSize.height);
      });
  });
  describe('CSS tests', () => {
      
  });