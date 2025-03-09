class LoginActions {
    static loguearUsuario(email,clave) {
        cy.get(':nth-child(2) > .dropdown').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').should('be.visible')
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.login (email, clave)
    }
     static validarURL(url) {
        cy.url().should('include', url)
     }
     static validarMensajeError(mensaje) {
        cy.get('.alert').should('be.visible')
        cy.get('.alert').invoke('text').then((text) => {
            expect(text.replace(/\u00a0/g, '')).to.contain(mensaje.replace(/\u00a0/g, '')
            )
        })
     }
    //Todos los metodos de login
}

export default LoginActions;