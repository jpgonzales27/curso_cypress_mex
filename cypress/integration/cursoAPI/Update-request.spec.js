/// <reference types='Cypress'/>

describe('JSON SERVER', () => {
    let titleOfPost = new Array()
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    it('UPDATE and existing posts via api and validate status code', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/14",
            body: {
                title: randomTitle,
                author: "JPupdate"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })

    });
    
});