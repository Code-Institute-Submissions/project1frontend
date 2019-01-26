describe('homepage', function() {
  var title = "Three New Videos";
  var title2 = "New Album Release";
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

  // it('focuses input on load', function(){
  //   cy.focused()
  //     .should('have.class', 'focus')
  // });

  it('can take a screenshot', function(){
    cy.screenshot('site', {capture: 'runner'});
  });
});