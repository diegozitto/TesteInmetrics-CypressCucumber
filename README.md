Desafio de fazer a automação do website http://automationpractice.com/index.php
utilizando cypress + cucumber.

Os testes são divididos em: WEB
1. Login válido
2. Realizar busca no site
3. Adicionar produto no carrinho
4. Confirmar produto adicionado na tela de pagamento

Necessário a escrita dos teste no formato BDD (feature, steps, page)

Status: incompleto devido a erro de undefined steps.

Configurações feitas:

1. npm init
2. npm install cypress@12.1.0 --save-dev
3. npm install --save-dev cypress-cucumber-preprocessor

Arquivo 'cypress.config.js':
const cucumber = require('cypress-cucumber-preprocessor').default  <-- (adicionado)
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())                          <-- (adicionado)
    },
    specPattern:"cypress/e2e/*.feature",                           <-- (adicionado)
  },
});

Arquivo 'package.json':

,                                                                  <-- (adicionado)
  "cypress-cucumber-preprocessor":{                                <-- (adicionado)
    "nonGlobalStepDefinitions": true,                              <-- (adicionado)
    "step_definitions": "cypress/e2e/steps"                        <-- (adicionado)
  }                                                                <-- (adicionado)
}                                                                  <-- última linha

Após isso apenas criei o 'login.feature' e a pasta 'steps' dentro de 'e2e' e o 
arquivo 'login.js' dentro de 'steps'
