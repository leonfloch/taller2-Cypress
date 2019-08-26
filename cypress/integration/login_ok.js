describe('LOGIN OK', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("l.valbuena@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()        
    })
})