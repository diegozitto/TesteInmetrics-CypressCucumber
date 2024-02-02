import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Estou na pagina inicial', () => {
    cy.log('Abrindo navegado')
    cy.abrirNavador('http://www.automationpractice.pl/index.php')
})

When('Digitar o produto na barra de buscar', () => {
   cy.buscarProduto("Dress")
   
   /**
    * Devido a algumas oscilações no website, os cenários tendem a sofrer mudanças
    * como o botão de "Add to cart" que hora está habilitado (1º cy.get()) e hora 
    * não (2º cy.get())
    */
   
   //cy.validarElemento('a[title="Add to cart"]')

   cy.validarElemento('span[class="button ajax_add_to_cart_button btn btn-default disabled"]')
})

Then('Verei os resultado na tela', () => {
    cy.scrollTo('center')
})
