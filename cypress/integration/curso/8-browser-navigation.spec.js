/// <reference types='Cypress'/>

describe('validate webdriver home page links', () => {

    it('testTitle', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include','contactus')
        
        cy.go('back')
        cy.reload()
        
        //* reload whitout using cache
        //* cy.reload(true)
        
        cy.go('forward')
        cy.url().should('include','contactus')
        
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include','Login-Portal')
        cy.go('back')
    });

    it.only('challenge', () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','To-Do-List')
        cy.go('back')
        cy.reload()
    });
    
});