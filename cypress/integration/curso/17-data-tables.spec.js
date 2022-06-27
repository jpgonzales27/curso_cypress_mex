/// <reference types='Cypress'/>

describe('handling data via webdriveruni', () => {

    before(() => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });


    it('Calculate and assert the total age of all users', () => {
        let userDetails = []
        let number = 0
        cy.get('#thumbnail-1 td').each(($e, index, $list) => {
            userDetails[index] = $e.text()
        }).then(() => {
            let i
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    cy.log(userDetails[i])
                    number += Number(userDetails[i])
                }
            }
            cy.log("total: " + number)
            expect(number).equals(322)
        })
    });

    it.only('Calculate and assert the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const lastname = "Woods"
            let elemento = $el.text()
            if (elemento.includes(lastname)) {
                cy.wrap($el).next().should('have.text','80')
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                    const userAge = age.text()
                    expect(userAge).to.equal('80')
                })
            }
        });
    });

});