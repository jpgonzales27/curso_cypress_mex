/// <reference types='Cypress' />

describe("Products api", () => {
  context("GET /produtos", () => {
    it("should return a list with all products", () => {
      cy.request({
        method: "GET",
        url: "https://serverest.dev/produtos",
      }).should((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.eq(34);
        expect(response.body.produtos.length).to.be.eq(34);
        expect(response.body.produtos[0]).to.have.all.keys(
            'nome', 'preco', 'descricao', 'quantidade', '_id'
          )
      });
    });
  });
});
