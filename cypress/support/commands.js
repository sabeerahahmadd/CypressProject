Cypress.Commands.add('visitWebsite', () => {
    //Visit the demoblaze website
    cy.visit('https://www.demoblaze.com/');
  });
  

  Cypress.Commands.add('visitContactForm', () => {
     //Visit the demoblaze website
    cy.visit('https://www.demoblaze.com/')
     //Locate the contact link on the nav bar and click 
    cy.get(':nth-child(2) > .nav-link').should('be.visible')
      .click()
    //Locate the pop-up and assert that it should be visible
    cy.get('#exampleModal > .modal-dialog > .modal-content').should('be.visible')
  });

  Cypress.Commands.add('addProductToTheCart', (numOfProduct) =>{
    //Visit the website
    cy.visit('https://www.demoblaze.com/')
    //Locate the product and click 
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('be.visible')
        .click()
    //Locate the name of the product and assert if its visible
    cy.get('.name').should('be.visible')
    //For loop to iterate over the products and add them to the cart
    for(let i=0 ; i< numOfProduct; i++)
      {
        cy.get('.col-sm-12 > .btn').click()
        cy.wait(2000)
      }
    //Locate the cart link in the nav bar and click
    cy.get('#cartur').should('be.visible')
          .click()

  });

  Cypress.Commands.add('removeProductFromTheCart', (numOfProduct) =>{
    //Locate the element 
    cy.get('#page-wrapper > div > div.col-lg-8 > div').each(($product,index )=>{
      //Product index starts at 1 so we add + 1
      const productListIndex = index +1
      //if product index is less than the num of products it locates the delete button and click it 
      if(productListIndex < numOfProduct)
        {
      cy.wrap($product).find('.success > :nth-child(4) > a').click({multiple:true})
      }
    })
  });
