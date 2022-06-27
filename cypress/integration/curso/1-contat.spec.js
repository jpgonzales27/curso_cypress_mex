/// <reference types='Cypress' />


describe('Test Contact Us form via WebdriverUni', () => {

    it.only('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title('eq','WebDriver | Contact Us')
        cy.url('include','contactus')
        cy.title().should('eq','WebDriver | Contact Us');
        cy.get('[name="first_name"]').should('be.visible').type('Juan Pablo')
        cy.get('[name="last_name"]').should('be.visible').type('Gonzales')
        cy.get('[name="email"]').should('be.visible').type('j@gmail.com')
        cy.get('textarea.feedback-input').should('be.visible').type('This is a comment')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

    it.only('Should not be able to submit a successful submission via contact us form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.get('[name="first_name"]').should('be.visible').type('Juan Pablo')
        cy.get('[name="last_name"]').should('be.visible').type('Gonzales')
        cy.get('textarea.feedback-input').should('be.visible').type('This is a comment')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})