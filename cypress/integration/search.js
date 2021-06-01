describe('Search elements', function () {
    beforeEach(()=> {
        cy.visit('/');
    })
    it('Search for elements with multiple results', function () {
       cy.search('dress')
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
    it('Search elements from txt', ()=>{
        cy.readFile('cypress/support/text/search.txt').then((text)=>{
            cy.search(text);
        })
        cy.fixture('results').then((results) => {
            cy.get(results.alert).should('contain', 'No results were found for your search');
        })

    })
    
})