describe("Create and mark-unmark as favorite", function(){
    it('Sign in', function(){
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

    it('Create a post', function(){
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('test')
            cy.get('input').eq(1).type('test')
            cy.get('textarea').type('description test')
            cy.get('.btn').contains('Publish Article').should('be.visible').click()

        })
        cy.url().should('include', 'article')
    });

    it('Mark/Unmark a post', function(){
        cy.get('.nav-link').last().click()
        cy.contains('My Articles').click()
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    });
});