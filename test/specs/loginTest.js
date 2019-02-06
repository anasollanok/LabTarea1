var assert = require("assert");
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('HTML tests', () => {
    it('Check that element exists', ()=>{
      browser.url('/');
/*
      var number = driver.findElements( By.id("username-input") ).size();
      assert.equal(number, 0);
      */
     var user= $('#username-input');
     var use2r= $('#username2-input');
     console.log(user);
     //var element = driver.findElements("id", "username-input" );
     //var element = driver.findElement(By.id("username-input"));

     // Revisa si existe el elemento.
     assert.notEqual(user.ELEMENT , null);
    // assert.notEqual(use2r.ELEMENT , null);
     /*
      var element = document.getElementById("username-input");
      assert.notEqual(element , null);
      */
  
    });
  });
/*
WebElement Image = driver.findElement(By.xpath("//img[@border='0']"));
        
//Get width of element.
int ImageWidth = Image.getSize().getWidth();
System.out.println("Image width Is "+ImageWidth+" pixels");

//Get height of element.
int ImageHeight = Image.getSize().getHeight();        
System.out.println("Image height Is "+ImageHeight+" pixels");
*/
/*
describe('Login page', () => {
    it('encontrar el titulo de la pagina', ()=>{
      browser.url('/');
      var titulo = browser.getTitle();
      assert.equal(titulo, "Login Page");
  
    });
  });


  describe('Login page 2', () => {
    it('encontrar el titulo de la pagina', ()=>{
      browser.url('/createUser.html?username=dbfsdf&password=sdfsdfdsf');
      var titulo = browser.getTitle();
      browser.getTitle().then(function(title){
        expect(title).equals( "Login Page");
    });
    /*
      if (assert.equal(titulo, "Login Page")) {
          console.log("test successful");
      } else {
        console.log("test failed");
      }
      */
    
  /*
    });
  });
*/