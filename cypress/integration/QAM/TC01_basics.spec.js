describe("login", function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('kattybarroso1321@gmail.com')
        cy.get('input[type="password"]').type('123456')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})