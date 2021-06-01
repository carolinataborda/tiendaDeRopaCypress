describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Login with incorrect credentials', ()=>{
        cy.login('Email','Password')
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
        })
        
} )