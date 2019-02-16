describe('homepage', function() {
  var title = 'Three New Videos';
  var title2 = 'New Album Release';
  beforeEach(function() {
    cy.visit('/');
  });

  it('contains "The Monkees"', function(){
    cy.contains('The Monkees');
  });
  
  it('contains title', function(){
    cy.contains(title);
  });

  it('contains title2', function(){
    cy.contains(title);
  });

  it('cy.title() - get the title', function(){
    cy.title().should('include', 'The Monkees')
  })

  it('.check() - check a checkbox or radio element', () => {
    // https://on.cypress.io/check

    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('input[type="checkbox"]').not('[disabled]')
      .check({ force: true }).should('be.checked')

    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]')
      .check({ force: true }).should('be.checked')

  })


  it('contains "booking"', function(){
    cy.contains('booking').click();
    cy.get('#textinputname')
      .type('My Name')
      .should('have.value', 'My Name');
    cy.get('#textinputemail')
      .type('notemail@example.com')
      .should('have.value', 'notemail@example.com');
    cy.get('#textinputphone')
      .type('0812345678')
      .should('have.value', '0812345678');
    cy.get('#numberinputguests')
      .type('200')
      .should('have.value', '200');
    cy.get('#textinputvenue')
      .type('Any')
      .should('have.value', 'Any');
  });

});