Cypress.Commands.add('abrirNavador', (url) => {
    cy.visit(url)
})

Cypress.Commands.add('fazerLogin', (user, senha) => {
    cy.get('#email').type(user)
    cy.get('#passwd').type(senha)
    cy.get('#SubmitLogin').click()
})

Cypress.Commands.add('validarElemento', (elementID) => {
     cy.get(elementID)
})

Cypress.Commands.add('validar_e_clicar', (elementID) => {
    cy.get(elementID).should('be.visible').click()
})

Cypress.Commands.add('buscarProduto', (textoParaBuscar) =>{
    cy.get('#search_query_top').clear().type(textoParaBuscar)
    cy.get('#searchbox > .btn').click()
})

Cypress.Commands.add('comparator', (idString1, idString2) => {
    cy.get(idString1).invoke('text').then((texto1) => {
      cy.get(idString2).invoke('text').then((texto2) => {
        expect(texto1.trim()).to.equal(texto2.trim());
      })
    })
  })
 
Cypress.Commands.add('mudarTamanho', (selectorID, textoTamanho) =>{
   cy.get(selectorID).select(textoTamanho)
}) 

Cypress.Commands.add('armazenarTexto', (elementID) =>{
  let textoArmazenado
  cy.get(elementID).invoke('text').then((texto) => {
    textoArmazenado = texto.trim()

    cy.log('Texto armazendo: ', textoArmazenado)
  })

})

Cypress.Commands.add('validar_Etapa_E_Avancar', (selectorID, textoEtapaEsperada, idAvancar) =>{
  cy.get(selectorID).should('contain.text', textoEtapaEsperada)
  cy.get(idAvancar).click()
})

Cypress.Commands.add('validar_Etapa', (selectorID, textoEtapaEsperada) =>{
  cy.get(selectorID).should('contain.text', textoEtapaEsperada)
})