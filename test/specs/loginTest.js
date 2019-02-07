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

    it('Header 5 color should be gray', ()=>{
        browser.url('/');
        const header = $('h5');
        var color = header.getCSSProperty('color');
        assert.equal(color, 'gray');    

    });
    it('Login container should have margin on top', ()=>{
        browser.url('/');
        const container = $('#containerLogin');
        var margin = container.getCSSProperty('margin-top');
        assert.notEqual(margin, '0');


    });
    it('Body elements should be aligned to the center', ()=>{
        browser.url('/');
        const _body = $('body');
        var alignment = _body.getCSSProperty('text-align');
        assert.equal(alignment, 'center');

    });
    it('All labels should be color white', ()=>{
        browser.url('/');
        const label = $('label');
        var color = _body.getCSSProperty('color');
        assert.equal(color, 'white');

    });
    it('Top bar should have an static position', ()=>{
        browser.url('/');
        const topBar = $('.mdc-top-app-bar');
        var position = _body.getCSSProperty('position');
        assert.equal(position, 'static');

    });

});