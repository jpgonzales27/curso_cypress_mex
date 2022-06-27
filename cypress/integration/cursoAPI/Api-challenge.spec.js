/// <reference types='Cypress'/>

describe('JSON SERVER', () => {
    
    const randomText = () => Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    let idPost;
    let idComment;
    let titleOfPost = new Array()
    let randomTitle = randomText()
    let randomComment = randomText()

    it('Create a new post', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts/",
            body: {
                title: randomTitle,
                author: "JPnew"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
            idPost = response.body.id
        })
    });

    it('Create a new comment', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments/",
            body: {
                body: randomComment,
                postId: idPost
            }
        }).then(response => {
            expect(response.status).to.eql(201)
            console.log(response.body)
            idComment = response.body.id
        })
    });

    it('Locate and assert the new comment', () => {
        cy.request({
            method: "GET",
            url: `http://localhost:3000/comments/${idComment}`,
        }).then(response => {
            expect(response.status).to.eql(200)
            expect(response.body.id).to.be.eq(idComment)
            expect(response.body.postId).to.be.eq(idPost)
            expect(response.body.body).to.be.eq(randomComment)
        })
    });
    
    it('Delete the new comment', () => {
        cy.request({
            method: "DELETE",
            url: `http://localhost:3000/comments/${idComment}`,
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });

    it('Delete the latest post', () => {
        cy.request({
            method: "DELETE",
            url: `http://localhost:3000/posts/${idPost}`,
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    });
});