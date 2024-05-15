describe('Add Product to the Cart', () => {

    beforeEach(() => {
        //custom command to visit the website
        cy.addProductToTheCart(2)
      });

      
      it('adds the product to the cart and verify that the product is added successfully - Positive', ()=>{
        //asserting on the basis of url of the page
        cy.url('include', '/cart.html')
        //locate the product and assert that it should be visible
        cy.get('.success > :nth-child(2)').should('be.visible')
          
      })

      it('places the order of the product successfully', ()=> {
       
        //loading data from contactus.json file & calling the call back function with data contents as the argument
        cy.fixture('payment_info.json').then((data) => {
            const validPaymentData = data.valid[0]
            //assignment of the content data 
          const Name = validPaymentData.Name;
          const Country = validPaymentData.Country;
          const City = validPaymentData.City;
          const Credit_Card = validPaymentData.Credit_Card;
          const Month = validPaymentData.Month;
          const Year = validPaymentData.Year
        //locate and click the place order button
        cy.get('.col-lg-1 > .btn').should('exist')
          .click()
        //locate contact us form fields, asserting its visibility and typing the data
        cy.wait(2000)
        cy.get('#name').should('be.visible')
          .type(Name)
        cy.wait(2000)
        cy.get('#country').should('be.visible')
           .type(Country)
        cy.wait(2000)
        cy.get('#city').should('be.visible')
           .type(City)
        cy.wait(2000)
        cy.get('#card').should('be.visible')
          .type(Credit_Card)
        cy.wait(2000)
        cy.get('#month').should('be.visible')
          .type(Month)
        cy.wait(2000)
        cy.get('#year').should('be.visible')
          .type(Year)
        
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').contains('Thank you for your purchase!')
        cy.wait(2000)
        cy.get('.confirm').click()
          
    })
      })

      it('places the order of the product with name and card number only', ()=> {
       
        //loading data from contactus.json file & calling the call back function with data contents as the argument
        cy.fixture('payment_info.json').then((data) => {
            const invalidPaymentData = data.invalid[0]
            //assignment of the content data 
          const Name = invalidPaymentData.Name;
          const Country = invalidPaymentData.Country;
          const City = invalidPaymentData.City;
          const Credit_Card = invalidPaymentData.Credit_Card;
          const Month = invalidPaymentData.Month;
          const Year = invalidPaymentData.Year
        //locate and click the place order button
        cy.get('.col-lg-1 > .btn').should('exist')
          .click()
        //locate contact us form fields, asserting its visibility and typing the data
        cy.wait(2000)
        cy.get('#name').should('be.visible')
          .type(Name)
          cy.wait(2000)
        cy.get('#country').should('be.visible')
           .type(Country)
           cy.wait(2000)
        cy.get('#city').should('be.visible')
           .type(City)
        cy.wait(2000)
        cy.get('#card').should('be.visible')
          .type(Credit_Card)
        cy.wait(2000)
        cy.get('#month').should('be.visible')
          .type(Month)
        cy.wait(2000)
        cy.get('#year').should('be.visible')
          .type(Year)
        
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').contains('Thank you for your purchase!')
        cy.wait(2000)
        cy.get('.confirm').click()
          
    })
      })
     
    })

describe('Remove Product from Cart', ()=> {

    beforeEach(() => {
        //custom command to visit the website
        cy.addProductToTheCart(3)
      });

    it('removes a single product from the cart', ()=>{
        //asserting on the basis of url of the page
        cy.url('include', '/cart.html')
        //locate product title & assert that it should be visible
        cy.get('.success > :nth-child(2)').should('be.visible')
        cy.wait(2000)
        //remove a product from the cart
        cy.removeProductFromTheCart(1)
         //locate the responsive table and asserting it through its length
        cy.get('#page-wrapper > div > div.col-lg-8 > div').should('have.length.lessThan', 2)

      })

      it('removes multiple products from the cart', ()=>{
        //asserting on the basis of the url of the page
        cy.url('include', '/cart.html')
        //remove 2 products from the cart
        cy.removeProductFromTheCart(2)

         //locate the responsive table and asserting it through its length
        cy.get('#page-wrapper > div > div.col-lg-8 > div').should('have.length.lessThan', 3)
        
      })
    })



      


