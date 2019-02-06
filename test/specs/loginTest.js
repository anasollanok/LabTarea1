var assert = require("assert");
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
    
  
    });
  });
