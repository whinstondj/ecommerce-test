import {} from '../support/commands'
import {} from '../support/actions/SearchActions'
import {} from '../support/actions/MenuActions'
import LoginActions, {} from '../support/actions/LoginActions'

import SearchActions from '../support/actions/SearchActions'
import MenuActions from '../support/actions/MenuActions'

describe('para validar el homepage de mi Ecommerce', () => {
  beforeEach(() => {
    MenuActions.visitHomePage()
  })

  afterEach(() =>{
    cy.log('Test finalizado')
  })

  it('hacer login exitoso', () => {
    cy.fixture('loginData').then((data) => {
      LoginActions.loguearUsuario(data.validUser.email, data.validUser.password)
      LoginActions.validarURL('route=account/account')
    })
  })

  it('hacer login fallido', () => {
    cy.fixture('loginData').then((data) => {
      LoginActions.loguearUsuario(data.invalidUser.email, data.invalidUser.password)
      LoginActions.validarMensajeError('Warning: No match for E-Mail Address and/or Password.')
  })
})

  it('verificar titulo de homapage', () => {
    MenuActions.verificarTituloPagina('Your Store')
  })
  it('buscar un producto', () => {
    const producto = 'Macbook'
    SearchActions.buscarProducto(producto)
    SearchActions.verificarTituloResultados(producto)
  })
  it ('verificar que en la busqueda del producto se muestran resultados con la palabra buscada', () => {
    const producto = 'Macbook'
    SearchActions.buscarProducto(producto)
    SearchActions.verificarResultados(producto)
  })
})


/*Comentarios de selectores
cy.get('#menu') -> Seleccion por el ID
cy.get('h1') -> Seleccion por el tag
cy.get('.product-thumb') -> Seleccion por la clase
cy.get('[name="search"]') -> Seleccion por el atributo
cy.get('button') -> Seleccion por el tag
cy.get('button#button-cart') -> Seleccion por el tag y el ID
cy.get('[data-cy="sidebar-link-runs-page"]') -> Seleccion por el atributo data-cy


Como priorizar selectores:
(data-cy) -> (id) -> (class) -> (tag)
*/

/* Simulaciones de eventos con cypress 
cy.get('button').click() -> Click
cy.get('input').type('Texto a escribir') -> Escribir
cy.get('input').clear() -> Limpiar
cy.get('input').check() -> Check
cy.get('input').uncheck() -> Uncheck
cy.get('input').select('Opcion') -> Seleccionar
cy.get('input').trigger('mouseover') -> Disparar evento
cy.get('input').dblclick() -> Doble click
cy.get('input').rightclick() -> Click derecho
cy.get('input').focus() -> Focus
cy.get('input').blur() -> Blur
cy.get('input').scrollIntoView() -> Scroll
cy.get('input').type('{enter}') -> Enter
cy.get('input').type('{esc}') -> Escape
cy.get('input').type('{tab}') -> Tab
cy.get('input').type('{selectall}') -> Seleccionar todo
cy.get('input').type('{backspace}') -> Borrar
*/
