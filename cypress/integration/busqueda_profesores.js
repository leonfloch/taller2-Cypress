describe('búsqueda de profesores', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.get('.Select-input').find('input').click().type("andres")        
                
    })
})