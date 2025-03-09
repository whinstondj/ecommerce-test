class SearchActions {
    static buscarProducto(producto) {
        cy.get('#search > .form-control').type(producto + '{enter}')
    }

    static verificarTituloResultados(palabra) {
        cy.get('h1').should('contain', palabra)
    }

    static verificarResultados(palabra) {
        cy.get('.product-thumb').then(($elements) => {
            const elementos = $elements.length
            cy.log ("Cantidad de elementos: " + elementos)
            cy.get('.product-thumb h4 a').each(($el) => {
              cy.log("Texto del Elemento:" + $el.text())
              expect($el.text().toLowerCase()).to.contain(palabra.toLowerCase())
            })
          })
    }  
}

export default SearchActions;