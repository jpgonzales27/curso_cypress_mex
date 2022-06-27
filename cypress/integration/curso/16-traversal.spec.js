/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("children() to get the children of DOM elements", () => {
        cy.get('.traversal-breadcrumb').children('.active').should('contain.text','Contact Us')
    });

    it("closest() to validate the closest ancestor DOM element", () => {
        cy.get('.traversal-badge').closest('div').should('have.class','thumbnail')
    });

    it("eq() to retrieve a specific element based on index", () => {
        cy.get('.traversal-drinks-list > *').eq(2).should('have.text','Milk')
    });

    it("filter() to retrieve DOM elements that match a specific selector", () => {
        cy.get('.btn-group-toggle > *').filter('.active').should('contain','Button-1')
    });

    it("find() to retrieve DOM elements of a given selector", () => {
        cy.get('.traversal-pagination').find('li').find('a').should('have.length',7)
        cy.get('.traversal-pagination > *').find('a').should('have.length',7)
    });

    it("first() to retrieve the first DOM element within elements ", () => {
        cy.get('.traversal-table > tbody > tr > td').first().should('have.text','Andy')
    });

    it("last() to retrieve the last DOM element within elements", () => {
        cy.get('.traversal-table > tbody > tr > td').last().should('have.text','Scott')
    });

    it("nextAll() to get all of the next sibling DOM elements within elements", () => {
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length',3);
    });

    it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
        cy.get('#coffee').nextUntil('#milk').should('have.length',1);
        cy.get('#coffee').nextUntil('#milk').should('contain','Tea');
    });
    
    it("not() to remove DOM element(s) from the set of elements", () => {
        cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class','disabled');
        cy.get('.traversal-button-states > button').not('.disabled').should('have.length',3);
    });

    it("parent() To get parent DOM element of elements", () => {
        cy.get('.traversal-mark').parent().should('contain.text','Lorem ipsum dolor sit amet, consectetur adipiscing elit')
        cy.get('.traversal-mark').parent().parent().should('have.class','traversal-marked-text')
    });

    it("parents() to get parents DOM element of elements", () => {
        cy.get('.traversal-cite').parents().should('match', 'blockquote')
        cy.get('.traversal-cite').parents().should('have.class', 'traversal-cite-text')
    });

    it("prev() to get the previous sibling DOM element within elements", () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
        cy.get('#sugar').prev().should('contain.text','Espresso')
    });

    it("prevAll() to get all previous sibling DOM elements within elements", () => {
        cy.get('.sales').prevAll().should('have.length',2)
        cy.get('.sales').prevAll().should('contain.text','Finance')
    });

    it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
        cy.get('#veggie').prevUntil('#fruits').should('contain','Apple')
    });

    it.only("siblings() To get all sibling DOM elements of elements", () => {
        cy.get('.traversal-button-other-states .active').siblings().should('have.length',3)
    });
});
