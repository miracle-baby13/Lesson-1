describe('Login tests', () => {

  it('Test NO1 - Login and logout with user888', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.login('user888@gmail.com', '1234567890');

    cy.logout();
  
  });

  it('Test NO2 - Login and logout with testowyqa', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.login('testowyqa@qa.team', 'QA!automation-1');

    cy.logout();
  });
  
});