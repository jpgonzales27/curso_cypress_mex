/// <reference types='Cypress'/>

describe('verify dropdown menus', () => {

    it('Select specific values', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
        cy.get('#dropdowm-menu-3').select('css')
    });

    it('Select specific text', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-1').select('SQL').contains('SQL')
        cy.get('#dropdowm-menu-2').select('JUnit')
        cy.get('#dropdowm-menu-3').select('JQuery')
    });

    it.only('challenge', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
        cy.get('#dropdowm-menu-2').select('TestNG').should('contains.text','TestNG')
        
    });
});