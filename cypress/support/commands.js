/**
 * Fill and submit login form
 * @param {string}  myObj.email User email.
 * @param {string}  myObj.password User password.
 * @result fills out and submits login form.
 */
Cypress.Commands.add("login", ({email, password}) => { 
    cy.get('#user_email').type(email)
    cy.get('#user_password').type(password)
    cy.get('.btn').contains('Login').click()
})

/**
 * Selects element with data-testid attribute
 * @param {string}  selector A selector used to filter matching DOM elements.
 * @param {string}  myObj.args options object to change the default behavior of cy.get()
 * @result gets DOM element with data-testid attribute
 */
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args);
});

/**
 * Selects min or max value on multirange slider
 * @param {string}  value Price value.
 * @param {boolean}  max boolean to determine if we want to set max or min price.
 * @result sets min or max value on multirange slider
 */
Cypress.Commands.add("choosePrice", (value, max = false) => {
    let selector
    (max) ? selector = '.ghost' : selector = '.original'
    
    cy.get(selector)
      .invoke('val', value, { force: true })
      .trigger('input', { force: true })
})
