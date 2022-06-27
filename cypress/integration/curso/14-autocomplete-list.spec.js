/// <reference types='Cypress'/>

describe('Verify autocomplete dropdown list', () => {

    it('Select specific product autocomplete dropdown list', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            let elemento = $el.text()
            cy.log(elemento)
            const product = 'Avacado'

            if (elemento.includes(product)) {
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include', product)
            }
        });
    });

    it.only('Challenge autocomplete dropdown list', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            let elemento = $el.text()
            cy.log(elemento)
            const product = 'Avacado'

            if (elemento.includes(product)) {
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include', product)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                let elemento = $el.text()
                cy.log(elemento)
                const product = 'Grapes'

                if (elemento.includes(product)) {
                    $el.trigger("click")
                    cy.get('#submit-button').click()
                    cy.url().should('include', product)
                }
            });
        })
    });
});