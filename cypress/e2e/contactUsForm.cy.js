
describe('Contact Us Form Testing', () => {
    beforeEach(() => {
         //custom command to visit the contact us form
         //Using camelcase convention for naming custom commands
         cy.visitContactForm()
       });
    
    it('should display all fields of the form - Positive', () => {
         
        //locate contact email & assert its visibility
        cy.get('#recipient-email').should('be.visible')
        //locate contact name & assert its visibility
        cy.get('#recipient-name').should('be.visible')
        //locate message & assert its visibility
        cy.get('#message-text').should('be.visible')
      
    })

    it('should provide success message after successful submission - Positive', () => {
        //loading data from contactus.json file & calling the call back function with data contents as the argument
        cy.fixture('contactus_data.json').then((Testdata) => {
         //Using camelcase for validContactUs Data object creation
            const validContactUsData = Testdata.valid[0]
            //assignment of the content data 
          const Contact_Email = validContactUsData.Contact_Email;
          const Contact_Name = validContactUsData.Contact_Name;
          const Message = validContactUsData.Message;
        
        //locate contact us form fields, asserting its visibility and typing the data
        cy.wait(2000)
        cy.get('#recipient-email').should('be.visible')
          .type(Contact_Email)
          cy.wait(2000)
        cy.get('#recipient-name').should('be.visible')
           .type(Contact_Name)
           cy.wait(2000)
        cy.get('#message-text').should('be.visible')
           .type(Message)
        
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        //locate the element and assert its visiblity
        cy.get('.active > .d-block').should('be.visible')
        
    })
})
     it('should provide success message for an invalid data submission  - Negative', () => {

        cy.fixture('contactus_data.json').then((Testdata) => {
         //Using camelcase for invalidContactUsData object creation

            const invalidContactUsData = Testdata.invalid[0]
            //assignment of the content data 
          const Contact_Email = invalidContactUsData.Contact_Email;
          const Contact_Name = invalidContactUsData.Contact_Name;
          const Message = invalidContactUsData.Message;
        
        //locate contact us form fields, asserting its visibility and typing the data
        cy.wait(2000)
        cy.get('#recipient-email').should('be.visible')
          .type(Contact_Email)
          cy.wait(2000)
        cy.get('#recipient-name').should('be.visible')
           .type(Contact_Name)
           cy.wait(2000)
        cy.get('#message-text').should('be.visible')
           .type(Message)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        //locate the element and assert its visiblity
        cy.get('.active > .d-block').should('be.visible')
        
    })
     })

     it('should provide success message for blank form submission - Negative', () =>{
            
        cy.fixture('contactus_data.json').then((Testdata) => {
            //Using camelcase for blankContactUsData object creation
            const blankContactUsData = Testdata.blank[0]
            //assignment of the content data 
          const Contact_Email = blankContactUsData.Contact_Email;
          const Contact_Name = blankContactUsData.Contact_Name;
          const Message = blankContactUsData.Message;
        
          cy.wait(2000)
          cy.get('#recipient-email').should('be.visible')
            .type(Contact_Email)
            cy.wait(2000)
          cy.get('#recipient-name').should('be.visible')
             .type(Contact_Name)
             cy.wait(2000)
          cy.get('#message-text').should('be.visible')
             .type(Message)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        //locate the element and assert its visiblity
        cy.get('.active > .d-block').should('be.visible')
        
    })
     })
})

     



