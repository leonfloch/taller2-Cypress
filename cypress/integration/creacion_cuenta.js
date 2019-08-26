describe('CREACION CUENTA EXISTENTE', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("demo")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("demo ap")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("l.valbuena@uniades.edu.co")        
        cy.get("select[name='idPrograma']").select('Administración')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")        
        cy.get('.cajaSignUp').find('[name="acepta"]').check()                
        cy.get('.cajaSignUp').contains('Registrarse').click()           
        cy.contains('Ocurrió un error activando tu cuenta')
    })
})