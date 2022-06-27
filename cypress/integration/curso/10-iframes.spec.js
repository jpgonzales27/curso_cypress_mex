/// <reference types='Cypress'/>

describe('Handling iframe and modals', () => {

    it('Iframe', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr','target').click({force:true})
        cy.get('#frame').then((iframe) => {
            const body = iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })


        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('.modal-dialog.modal-md .modal-body').should('contains.text','Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
    });

    it.only('Iframe other way', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr','target').click({force:true})
        cy.get('#frame').then((iframe) => {
            const body = iframe.contents().find('body')
            cy.wrap(body).as('iframe2')
        })


        cy.get('@iframe2').find('.modal-dialog.modal-md .modal-body').as('modaltext')
        cy.get('@iframe2').find('.modal-dialog.modal-md .modal-footer').as('modalButtons')

        cy.get('@modaltext').should((result) => {
            const text = result.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })

        cy.get('@modalButtons').contains('Close').click({force:true})

    });
});