describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome to FidZulu')
  })
  it('Displays catalogue products', () => {
    cy.visit('/')
    cy.contains('a', 'Catalogue').click()
    cy.contains('a', 'Bikes')
    cy.contains('a', 'Books')
    cy.contains('a', 'DVDs')
    cy.contains('a', 'Food')
    cy.contains('a', 'Laptops')
    cy.contains('a', 'Toys')
    cy.visit('/')
    cy.contains('button', 'Shop now!').click()
    cy.contains('a', 'Bikes')
    cy.contains('a', 'Books')
    cy.contains('a', 'DVDs')
    cy.contains('a', 'Food')
    cy.contains('a', 'Laptops')
    cy.contains('a', 'Toys')
  })
  it('Displays about page and buttons work', () => {
    cy.visit('/')
    cy.contains('a', 'About').click()
    cy.contains('Meet the brains behind this project!')
    cy.contains('Front-End team')
    cy.get('.p-carousel-next').click()
    cy.contains('Middle-Tier team')
    cy.get('.p-carousel-next').click()
    cy.contains('Back-End team')
    cy.get('.p-carousel-prev').click()
    cy.contains('Middle-Tier team')
  })
  it('Displays contact page', () => {
    cy.visit('/')
    cy.contains('a', 'Contact').click()
    cy.contains('Email: contact@fmr.com')
    cy.contains('Phone: 123-456-7890')
    cy.contains('Address: 123 Main Street, City, State ZIP')
    cy.contains('Website: www.fidelityinvestments.com')
    cy.contains('Facebook:Fidelity-investments')
    cy.contains('Instagram: fidelity_investments')

  })
})
