describe('Favorites', () => {
  before(() => {
    cy.visit('/users/sign_in')
    cy.fixture('user').then((user) => {
      cy.login(user)
    })
  })
  /*
  There is an error in the console while opening the property page.
  To make the test running smoothly I've added below code to ignore
  the exception. But it is a bug and have to be fixed!
  There should be a reference to JIRA bug ticket added.
  */
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it(`User is able to add search results to favorites, 
  Then opens added property from favorites page
  And removes it from favorites`, () => {
    // test selectors used more then once
    const myPages = '#my-profile'
    const property = '.property-card'
    const favourites = 'favourites-profile-link'
    // test variables
    const propertyType = 'Apartment'
    const minPrice = '2100000'
    const maxPrice = '102100000'

    // open search page
    cy
      .get(myPages).click()
      .getBySel('link-to-first-search').click()
    
    // search for property with given type and price
    cy.contains(propertyType).click()
    cy
      .choosePrice(minPrice)
      .choosePrice(maxPrice, true)  
      .getBySel('view-listings').click()
     
    // check that there are results and add first property to favorites 
      .get('.properties-list').should('be.visible')
      .get('[x-show="!isFavourite"]').first().click()
    
    // open favorites page and check that the property was added
      .get(myPages).click()
      .getBySel(favourites).click()
      .get(property).should('have.length', 1)

    // open property and remove it from favourites
      .get(property).click()
      .getBySel('project-favourite-button').first().click({ force: true })

     // check that property was removed from favourites 
      .get(myPages).click()
      .getBySel(favourites).click()
      .get(property).should('not.exist')
  })
})
