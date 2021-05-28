describe('Search elements', function () {
    beforeEach(()=> {
        cy.visit('/');
    })
    it('Search for elements with multiple results', function () {
        cy.fixture('index').then((index) => {
            cy.get(index.searchBox).type("dress");
            cy.get(index.searchButton).click();
        })
        cy.fixture('results').then((results) => {
            cy.get(results.title).should('contain', 'dress');
        })
    })
        it('Search elements with no results', () => {
            cy.fixture('index').then((index) => {
                cy.get(index.searchBox).type("qwerty");
                cy.get(index.searchButton).click();
            
        })
        cy.fixture('results').then((results) => {
            cy.get(results.alert).should('contain', 'No results were found for your search');
        })
    })
})