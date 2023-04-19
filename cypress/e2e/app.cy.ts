/// <reference types="cypress" />

describe('testing navbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays nav bar', () => {
    cy.get('.navbar_logo').should('have.text', 'I❤Anime');
    cy.get('.navbar_lists li').should('have.length', 3);
    cy.get('.navbar_lists li').first().should('have.text', 'Anime');
    cy.get('.navbar_lists li').last().should('have.text', 'About Us');
  });

  it('navigation', () => {
    cy.get('.nav-links').contains('About Us').click();
    cy.url().should('include', '/about');
    cy.get('h3').contains('Alesia-Abaeva');
  });
  it('is true', () => {
    expect(true).to.equal(true);
  });
});
