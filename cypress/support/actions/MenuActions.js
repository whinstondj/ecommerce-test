class MenuActions {
    static visitHomePage() {
        cy.visit('https://winstoncastillo.com/robot-selenium/');
    }
    static revisarMenu(elemento) {
        cy.get('#menu').should('be.visible');
        elemento.trigger('mouseover');
    }
    static verificarTituloPagina(titulo) {
        cy.title().should('eq', titulo)
    }
}
export default MenuActions;