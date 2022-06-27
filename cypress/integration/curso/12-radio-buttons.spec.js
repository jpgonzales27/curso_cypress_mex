/// <reference types='Cypress'/>

describe('verify radio buttons', () => {

    it('Check and validate radio  buttons', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#radio-buttons').find('[type=radio]').first().check().should('be.checked')
        cy.get('#radio-buttons').find('[type=radio]').eq(1).check().should('be.checked')
    });


    it.only('validate the statesa radio buttons', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

        cy.get('[value=lettuce]').should('not.be.checked');
        cy.get('[value=pumpkin]').should('be.checked');
        cy.get('[value=cabbage]').should('be.disabled');
    });
});