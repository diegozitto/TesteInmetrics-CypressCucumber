import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Estou na pagina inicial', () => {
    cy.log('Abrindo navegado')
    cy.abrirNavador('http://www.automationpractice.pl/index.php')
})

When('Adicionar o produto que quero no carrinho', () => {
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
})

Then('Verei o pop up me informando a adicao', () => {
    cy.contains('.layer_cart_product > h2', "Product successfully added to your shopping cart")
})