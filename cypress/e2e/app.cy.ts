describe('Navigation', () => {
  it('should navigate to the contact page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="contact"]').click();

    cy.url().should('include','/contact');

    cy.get('h1').contains('Contactez-nous');
  })
})

describe('Contact page', () => {
  it('can submit a contact request', () => {
    cy.visit('http://localhost:3000/contact')

    const form = 'form[data-test="contact-form"] ';
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('textarea[name="message"]').type("This is a test message.");

    cy.get('button[type="submit"]').click();

    //cy.contains('Votre message a bien été envoyé');
  })
})
