/// <reference types='Cypress'/>

describe('description', () => {


    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    });


    it('incerteptar la GET request', () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*"
        }).as("getComment")

        cy.get(".network-btn").click();
        cy.wait("@getComment").its("response.statusCode").should("eq", 200)
    });
    it('intercept la GET request y mokeando nuestros datos', () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*"
        },
            {
                body: {
                    "postId": 2,
                    "id": 2,
                    "name": "Texto desde el intercept",
                    "email": "jp@gardner.biz",
                    "body": "Este es un mensaje que esta siendo adicionado por el intercet del GET"
                }
            }

        ).as("getComment")

        cy.get(".network-btn").click();
        cy.wait("@getComment").its("response.statusCode").should("eq", 200)
    });


    it('incerteptar la POST request', () => {
        cy.intercept({
            method: "POST",
            url: "**/comments"
        }).as("postComment")

        cy.get(".network-post").click();
        cy.wait("@postComment").its("response.statusCode").should("eq", 201)
    });

    it('intercept la POST request y mokeando nuestros datos', () => {
        cy.intercept({
            method: "POST",
            url: "**/comments"
        },
            {
                body: {
                    "id": 2,
                    "name": "Using POST in cy.intercept()",
                    "email": "jp@cypress.io",
                    "body": "Añadiendo un dato por el intercept",
                }
            }

        ).as("postComment")

        cy.get(".network-post").click();
        cy.wait("@postComment").should(({ request, response }) => {
            console.log(request)
            //que el payload enviado contenta enamil
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')

            console.log(response)

            expect(response.body).to.have.property("body", "Añadiendo un dato por el intercept")
            expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')

        })
    }); 

    it('incerteptar la PUT request', () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        }).as("putComment")

        cy.get(".network-put").click();
        cy.wait("@putComment").its("response.statusCode").should("eq", 200)
    });


    it('incerteptar la PUT request y mockear un error', () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        }, {
            statusCode: 404,
            body: { error: "Ocurrio un error no encontrado el usario" },
            delay: 500
        }).as("putComment")

        cy.get(".network-put").click();
        cy.wait("@putComment")
        cy.get('.network-put-comment').should('contain.text',"Ocurrio un error no encontrado el usario")
    });

    it('intercept la PUT request y mokeando nuestros datos', () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        },
            {
                body: {
                    "id": 3,
                    "name": "usando cy.intercept() para capturar el PUT",
                    "email": "jp@cypress.io",
                    "body": "puedes usar cy.intercept() con GET, POST, PUT, PATCH, or DELETE"
                }
            }

        ).as("putComment")

        cy.get(".network-put").click();
        cy.wait("@putComment").should(({ request, response }) => {
            console.log(request)
            //que el payload enviado contenta enamil
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')

            console.log(response)

            expect(response.body).to.have.property("body", "puedes usar cy.intercept() con GET, POST, PUT, PATCH, or DELETE")
            expect(response && response.body).to.have.property('name', 'usando cy.intercept() para capturar el PUT')

        })
    });
});