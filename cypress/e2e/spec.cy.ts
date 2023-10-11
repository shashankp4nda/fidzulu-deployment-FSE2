describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome to FidZulu')
  })
  it('Displays catalogue products', () => {
    cy.visit('/')
    cy.contains('a', 'Catalogue').click();
    cy.contains('a', 'Bikes')
    cy.contains('a', 'Books')
    cy.contains('a', 'DVDs')
    cy.contains('a', 'Food')
    cy.contains('a', 'Laptops')
    cy.contains('a', 'Toys')
  })
})
