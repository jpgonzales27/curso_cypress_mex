/// <reference types='Cypress'/>

describe('handle js alerts', () => {


    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com')
    });


    it('corfirm js alerts contains the correct text', () => {

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })


    });


    it('validate js confirm alert', () => {

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        //* cypress automaticamente presiona el boton de ok
        cy.get('#button4').click()


        cy.on('window:confirm', (str) => {
            //! true = ok button -- false = cancel button
            return true
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it('Challenge validate js cancel alert', () => {

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        //* cypress automaticamente presiona el boton de ok
        cy.get('#button4').click()


        cy.on('window:confirm', (str) => {
            //! true = ok button -- false = cancel button
            return false
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });


    it.only('validate js confirm alert with stub', () => {

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        const stub = cy.stub()
        cy.on('window:confirm' , stub)

        cy.get('#button4').click().then((result) => {
          expect(stub.getCall(0)).to.be.calledWith('Press a button!')  
        }).then(() => {
            return true
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
});