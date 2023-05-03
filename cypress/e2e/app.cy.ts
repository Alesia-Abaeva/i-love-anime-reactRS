/// <reference types="cypress" />

describe('testing app', () => {
  it('displays nav bar & navigation', () => {
    cy.visit('/');

    cy.get('.navbar_logo').should('have.text', 'I❤Anime');
    cy.get('.navbar_lists li').should('have.length', 3);
    cy.get('.navbar_lists li').first().should('have.text', 'Anime');
    cy.get('.navbar_lists li').last().should('have.text', 'About Us');

    cy.get('.nav-links').contains('About Us').click();
    cy.url().should('include', '/about');
    cy.get('h3').contains('Alesia-Abaeva');

    cy.get('.nav-links').contains('Forms').click();
    cy.url().should('include', '/forms');
    cy.get('h2').contains('Add new character');
  });

  it('check 404 page', () => {
    cy.visit('/banana');
    cy.get('h2').should('have.text', 'Page not found');
  });

  it('check main page(anime)', () => {
    cy.visit('/');
    cy.get('h2').should('have.text', 'Anime');
    cy.get('.countries_container .country_item').should('have.length', 16);
    cy.get('h3').first().should('have.text', 'Shingeki no Kyojin');

    // modal
    cy.get('.country_item').first().click();
    cy.get('.modal_container h1').should('have.text', 'ANIME');
    cy.get('.anime_name').should('have.text', 'Shingeki no Kyojin');

    cy.get('.btn_close').click();

    cy.get('.modal_container').should('not.exist');

    // pagination
    cy.get('[data-testid=NEXT]').click();
    cy.get('.countries_container .country_item').should('have.length', 16);
    cy.get('h3').first().should('have.text', 'Code Geass: Hangyaku no Lelouch');

    cy.get('[data-testid=PREV]').click();
    cy.get('h3').first().should('have.text', 'Shingeki no Kyojin');

    // search
    cy.get('[data-testid=search]').type('Kimetsu no Yaiba{enter}');
    cy.get('[data-testid=search]').should('have.value', 'Kimetsu no Yaiba');

    cy.get('.countries_container .country_item').should('have.length', 16);

    cy.get('.nav-links').contains('About Us').click();
    cy.url().should('include', '/about');

    cy.get('.nav-links').contains('Anime').click();

    cy.get('.countries_container .country_item h3')
      .eq(1)
      .should('have.text', 'Kimetsu no Yaiba: Katanakaji no Sato-hen');

    cy.get('[data-testid=search]').clear();
    cy.get('[data-testid=search]').type('sddadad{enter}');
    cy.get('.countries_title').should('have.text', 'nothing was found');
  });

  it('should add card in form', () => {
    const word = 'Feed the cat';
    const descriptions =
      'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes';

    cy.visit('forms');

    cy.get('[data-testid=description]').type(descriptions);
    cy.get('[data-testid=description]').should('have.value', descriptions);

    cy.get('[data-testid=date]').type('1994-09-20');
    cy.get('[data-testid=date]').should('have.value', '1994-09-20');

    cy.get('[data-testid=file]').attachFile('404.jpg');

    cy.get('select').select('Sports flags');
    cy.get('[data-testid=radio]').click({ force: true });
    cy.get('[data-testid=check]').click({ force: true });

    cy.get('[data-testid=title]').type(word);
    cy.get('[data-testid=title]').should('have.value', word);
  });

  it('should add invalide date in form', () => {
    cy.visit('forms');

    cy.get('[data-testid=title]').type('f');
    cy.get('[data-testid=title]').should('have.value', 'f');
    cy.get('.button_form').click();

    cy.get('.error_title').eq(0).contains('the name must be more than 2 characters');
  });

  it('is is true?', () => {
    expect(true).to.equal(true);
  });
});
