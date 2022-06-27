/// <reference types='Cypress'/>

describe('verify checboxes', () => {

    it('Check and validate checkboxes', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

        cy.get('#checkboxes input[value=option-4]').check().should('be.checked')
        cy.get('#checkboxes input[value^=option]').eq(1).check().should('be.checked')
        cy.get('#checkboxes input').first().check().should('be.checked')

    });

    it('challenge', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes input[value=option-3]').uncheck().should('not.be.checked')
    });

    it.only('multiples checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('input[type=checkbox]').each(($el,index,$list)=>{
            cy.wrap($el).check()
        })
        cy.get('input[type=checkbox]').uncheck(["option-1","option-2","option-3","option-4"]).should('not.be.checked')
        cy.get('input[type=checkbox]').check(["option-1","option-2","option-3","option-4"]).should('be.checked')
    });
});