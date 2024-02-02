import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Estou na pagina inicial', () => {
    cy.log('Abrindo navegado')
    cy.abrirNavador('http://www.automationpractice.pl/index.php')
    
})

When('Preencher meus dados', () => {
    
    cy.log('Validando e clicando no botão de sign in')
    if( cy.validarElemento('a[class=login]')){
        cy.get('a[class=login]').click()
     }

    cy.log('Validando "authentication"')
    cy.validarElemento('.page-heading')
    cy.log('Realizando login')
    cy.fazerLogin("teste2021@teste.com.br", "teste")
})

Then('Estarei na area logada', () => {
    cy.validarElemento('a[title=Orders]')
    cy.validarElemento('a[title=Addresses]')
    cy.validarElemento('a[title=Information]')
})
