// cypress/integration/showMore.spec.js

describe('Show More Functionality on Small Screens', () => {
  it('Should toggle the visibility of additional text when "Show More" button is clicked on small screens', () => {
   
    cy.viewport('iphone-6');
    cy.visit('https://exodus-tours.netlify.app/');
    cy.get('#show-more-btn').click();
    cy.get('#show-more-text').should('be.visible');
    cy.get('#show-more-btn').click();
    cy.get('#show-more-text').should('not.be.visible');
  });
});
