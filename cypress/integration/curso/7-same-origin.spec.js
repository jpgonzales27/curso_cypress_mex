/// <reference types="cypress" />

describe("Cypress web security", () => {
    //! esto dara mal asi este deshabilidatado el chromeWebSecurity
    it("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    //* este si dara bien cuando este deshabilidatado el chromeWebSecurity
    it.only("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})