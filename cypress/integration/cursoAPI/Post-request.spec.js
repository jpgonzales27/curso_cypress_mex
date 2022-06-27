/// <reference types='Cypress'/>

describe('JSON SERVER', () => {
    let titleOfPost = new Array()
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    it('POST posts create a new post via api and validate status code', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts/",
            body: {
                title: randomTitle,
                author: "JP"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })

    });
    
    it('GET validate keys of latest post', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            body.forEach(element => {
                titleOfPost.push(element['title'])
            });
        }).then(() => {
            let latestPost = titleOfPost[titleOfPost.length - 1]
            expect(latestPost).to.eq(randomTitle)
        })
    });
});