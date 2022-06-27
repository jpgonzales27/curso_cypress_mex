/// <reference types='Cypress'/>

describe('aliases and invoke', () => {

    
    before(() => {
        cy.visit("https://automationteststore.com/");
    });
    
    it('validate a specific hair care product aliases', () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.log('@productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt',5)
        cy.get('@productThumbnail').should('include','Seaweed')
    });

    it('challenge products', () => {
        cy.get('.thumbnail').as('productos')
        cy.get('@productos').its('length').should('eq',16);
        cy.get('@productos').find('.productcart').invoke('attr','title').should('include','Add to Cart');
    });

    it.only('calculate total of normal and sale products', () => {

        //! TODO: este es un problemas con el each no nos permite calcular el valor porq es ascincrono y tarda
        cy.get('.thumbnail').as('productos')
        let totalp = 0
        console.log('esto empieza')
        cy.get('@productos').find('.oneprice').each(($el,index,$list)=>{
            let elemento=$el.text().substring(1)
            totalp +=Number(elemento)
            console.log(totalp)
        })
        console.log('esto sigue')
        console.log(totalp)
        
        // TODO: Solucion usando varios then
        let itemsTotal = 0
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemPriceNew')

        cy.get('@itemPrice').then((result) => {
            let total = 0;
            let prices = result.split('$')
            for( let i = 0 ; i < prices.length; i++) {
                cy.log(prices[i])
                total += Number(prices[i])
            }

            cy.log('Items total '+total)            
            itemsTotal += total
        })

        cy.get('@itemPriceNew').then((result) => {
            let saleTotal = 0;
            let salePrices = result.split('$')
            for( let i = 0 ; i < salePrices.length; i++) {
                cy.log(salePrices[i])
                saleTotal += Number(salePrices[i])
            }

            cy.log('Items sale total '+saleTotal)            
            itemsTotal += saleTotal
        })
        .then((result) => {
          cy.log(`el total de todos los productos es ${itemsTotal}`)
          expect(itemsTotal).to.equal(638)  
        })
        
         // TODO: Solucion2 usando varios then y forEach
        let itemsTotal2 = 0
        cy.get('@itemPrice').then((result) => {
            let total = 0;
            let prices = result.split('$')
            prices.forEach(e => {
                cy.log(e)
                total += Number(e)
            });
            
            cy.log('Items total2 '+total2)  
            itemsTotal2 += total
        })
        cy.get('@itemPriceNew').then((result) => {
            let saleTotal2 = 0;
            let salePrices = result.split('$')
            for( let i = 0 ; i < salePrices.length; i++) {
                cy.log(salePrices[i])
                saleTotal2 += Number(salePrices[i])
            }

            cy.log('Items sale total '+saleTotal2)            
            itemsTotal2 += saleTotal2
        })
        .then((result) => {
          cy.log(`el total de todos los productos es ${itemsTotal2}`)
          expect(itemsTotal2).to.equal(638)  
        })

    });
});