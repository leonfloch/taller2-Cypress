describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})



describe('LOGIN OK', function() {
    it('realizar login exitoso', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("l.valbuena@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()        
    })
})


describe('CREACION CUENTA EXISTENTE', function() {
    it('Intentar crear una cuenta que ya existe', function() {
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


describe('BUSCAR PROFESORES', function() {
    it('buscar profesores', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('.buscador').click()
      cy.get('.Select-input  input').type("leonardo")
      cy.get('.Select-input  input').clear()
      cy.get('.Select-input  input').type("Leonardo Da Vinci")
      cy.get('#react-select-required_error_checksum--option-0').click()
      cy.contains('Leonardo Da Vinci - MATE1005B')
    })
  })