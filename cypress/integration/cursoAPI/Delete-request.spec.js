/// <reference types='Cypress'/>

describe('JSON SERVER', () => {
    let titleOfPost = new Array()
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    it('Delete and existing posts via api and validate status code', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/12"
        }).then(response => {
            expect(response.status).to.eql(200)
        })

    });
    
});