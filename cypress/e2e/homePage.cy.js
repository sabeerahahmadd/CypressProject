describe('Home Page Testing', () => {
  it('should have a visible website logo', () => {
    //custom command to visit the website
    //Using camelcase convention for naming custom commands
    cy.visitWebsite()
    //locate the logo and adding assertion that it is visible
    cy.get('#nava > img').should('be.visible')
  })

  it('should have a logo that is clickable and navigates to the home page when clicked', () =>{
    //custom command to visit the website
     //Using camelcase convention for naming custom commands
    cy.visitWebsite()
    //locate the logo and click the logo to check redirection and click
    cy.get('#nava > img').should('be.visible')
      .click()
    //asserting through url 
    cy.url('include', '/index.html')
  })

  it('should have navigation bar with clickable links', ()=>{
     //custom command to visit the website
      //Using camelcase convention for naming custom commands
     cy.visitWebsite()
     //locate the nav bar and assert if its visible
     cy.get('#navbarExample').should('be.visible')
     //locate the nav bar and check if they have links more than 0
     cy.get('#navbarExample > ul > li.nav-item.active > a').should('have.length.greaterThan', 0)
  })

})

describe('User Interface - Home Page', () =>{

  it('should have correct dimensions for the logo in the header', () => {
      //visiting the website through custom command
      //Using camelcase convention for naming custom commands
     cy.visitWebsite()
     //locate the logo and assert through css 
     cy.get('#nava > img').should('have.css', 'width', '50px')
     cy.get('#nava > img').should('have.css', 'height', '50px')
     cy.get('#nava > img').should('have.css', 'margin-right', '10px')

  })

})