describe( 'First test', () => {

    it( 'Navigate to google', () => {
        cy.visit('http://google.com/')
        
    })
    it( 'Navigate to youtube', () => {
        cy.visit( 'http://youtube.com')
    })
})