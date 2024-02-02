Feature: Confirmar o produto na tela de pagamento

  Scenario: Confirmar o produto na tela de pagamento
    Given Estou na pagina inicial e fizer o login
    When  Passar pelo fluxo de checkout
    Then Confirmarei o produto na tela de pagamento