Cypress.Commands.add("SignIn", () => {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('kattybarroso1321@gmail.com')
            cy.get('input[type="password"]').type('Karolita1.')
            cy.root().submit()
        })
        cy.contains('Your Feed', {timeout:1000}).should('be.visible')
})

