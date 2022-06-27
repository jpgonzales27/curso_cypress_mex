/// <reference types='Cypress'/>

describe('JSON SERVER', () => {
    let result;
    it('GET posts validate status code', () => {
        result = cy.request("GET", "http://localhost:3000/posts/")
        result.its('status').should('equal', 200)
    });

    it('GET posts validate keys and values', () => {
        result = cy.request("GET", "http://localhost:3000/posts/").then((response) => {
            console.log(response.body)
            let title = response.body[0].title
            let author = response.body[0].author
            let id = response.body[0].id
            expect(response.status).to.eq(200)
            expect(title).to.be.eq('juan cambio author')
            expect(author).to.be.eq('juanpi')
            expect(id).to.be.eq(3)

        })

    });

    it('GET posts validate keys and values other way', () => {
        result = cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            headres: {
                accep: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            console.log(body)
        
            expect(body[0]).has.property("title",'juan cambio author')
            expect(body[0]).has.property("author",'juanpi')
            expect(body[0]).has.property("id",3)

            body.forEach(element => {
                expect(element).to.have.all.keys('id','author','title')
                cy.log("Author: " + element["author"] + " & Title: " + element["title"]);
            });
      
        })

    });
});