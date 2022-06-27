/// <reference types='Cypress'/>

describe('Test mouse actions', () => {

    it('Scroll element', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    });

    it('Drag and drop an element', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    });

    it('double click', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#double-click').dblclick()
    });

    it.only('hold down the left mouse click', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#click-box').trigger('mousedown',{which:1}).then((element) => {
            expect(element).to.have.css('background-color','rgb(0, 255, 0)')
        })
    });
});