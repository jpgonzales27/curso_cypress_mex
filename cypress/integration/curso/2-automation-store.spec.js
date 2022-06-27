/// <reference types='Cypress' />

describe("Test automation test store", () => {
    it.only("titleTest", () => {
        cy.visit("https://automationteststore.com/")
        cy.title().should("eq", "A place to practice your automation skills!")
        cy.get('a[href$="contact"]')
            .click()
            .then((result) => {
                cy.log(`RESULT: ${result.text()}`)
                console.log(`RESULT: ${result.text()}`)
            })
        cy.get("#ContactUsFrm_first_name").type("Juan")
        cy.get("#ContactUsFrm_email").type("j@gmail.com")
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email")
        cy.get("#ContactUsFrm_enquiry").type("que es enquiry")
        cy.get("button[title='Submit']").click()
        cy.get(".mb40 > :nth-child(3)").should(
            "have.text",
            "Your enquiry has been successfully sent to the store owner!"
        )
    })

    it("contains", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname")
            .contains("Skinsheen Bronzer Stick")
            .click()
            .then((result) => {
                console.log(`nombre: ${result.text()}`)
            })
    })

    it("find", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click()
    })
})
