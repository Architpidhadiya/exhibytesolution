/*describe('My First Cypress Test', () => {
    it('Should visit a page and check an element', () => {
      cy.visit('https://youtube.com');
      cy.contains('Example Domain').should('be.visible');
    });
  });*/

  /*describe('Basic Cypress Test', () => {
    it('Should visit a page and check for an element', () => {
  
      cy.visit('https://youtube.com');
  
      cy.get('h1').should('be.visible');
  
      cy.contains('About').click();
  
      cy.url().should('include', '/about');
    });
  });*/

  /*describe('Element Visibility Test', () => {
    it('Should show and hide an element when a button is clicked', () => {
      cy.visit('https://example.com');
  
      cy.get('.hidden-element').should('not.be.visible');

      cy.get('.show-button').click();
  
      cy.get('.hidden-element').should('be.visible');
    });
  });*/  

  
  describe('Login Test', () => {
    it('Should log in successfully with valid credentials', () => {
      cy.visit('https://example.com/login');
  
      cy.get('input[name="username"]').type('user123');
      cy.get('input[name="password"]').type('password123');
  
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, user123').should('be.visible');
    });
  });
  