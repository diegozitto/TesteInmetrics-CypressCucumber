import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Estou na pagina inicial e fizer o login', () => {
    cy.log('Abrindo navegado')
    cy.abrirNavador('http://www.automationpractice.pl/index.php')

    cy.get('a[class=login]').click()
    cy.fazerLogin("teste2021@teste.com.br", "teste")
    cy.get('div[class=shopping_cart]').click()
})

When('Passar pelo fluxo de checkout', () => {
    cy.buscarProduto("Dress")

    if (cy.get('span[class="button ajax_add_to_cart_button btn btn-default disabled"]').first()) {
        cy.get('a[class=product-name]').first().click()

        //são duas interaçõs propositais pois após a primeira
        //o botão de 'ADD TO CART' some e apenas reaparece após
        //a segunda interação de troca de tamanho
        cy.mudarTamanho('select[id=group_1]', '3')
        cy.mudarTamanho('select[id=group_1]', '2')

        cy.validar_e_clicar('button[name="Submit"]')
    } else {
        cy.validar_e_clicar('a[title="Add to cart"]')
    }
    
    cy.contains('.layer_cart_product > h2', "Product successfully added to your shopping cart")
})

Then('Confirmarei o produto na tela de pagamento', () => {
    cy.validar_e_clicar('a[title="Proceed to checkout"]')

    cy.validar_Etapa_E_Avancar('.step_current > span', "Summary", '.cart_navigation > .button > span')
    cy.validar_Etapa_E_Avancar('.step_current > span', "Address", '.cart_navigation > .button > span')
    cy.get('#cgv').click()
    cy.validar_Etapa_E_Avancar('.step_current > span', "Shipping", '.cart_navigation > .button > span')
    cy.validar_Etapa('#step_end > span', "Payment")    
})