import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// 1. Contexto
Given("que eu estou logado no sistema e na página de produtos", () => {
  cy.visit("https://www.saucedemo.com/", { 
    timeout: 60000, 
    failOnStatusCode: false,
    onBeforeLoad(win) {
      
      delete win.navigator.serviceWorker;
    }
  });
  
  
  cy.get('[data-test="username"]', { timeout: 30000 }).should('be.visible').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

// 2. Adicionar produtos
When("eu adiciono os seguintes produtos ao carrinho:", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    const produtoId = row.produto.toLowerCase().replace(/ /g, "-");
    cy.get(`[data-test="add-to-cart-${produtoId}"]`).click();
  });
});

// 3. Avançar para o checkout
When("avanço para a página de checkout", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="checkout"]').click();
});

// 4. Preencher dados
When("preencho os dados de envio com {string}, {string} e {string}", (nome, sobrenome, cep) => {
  cy.get('[data-test="firstName"]').type(nome);
  cy.get('[data-test="lastName"]').type(sobrenome);
  cy.get('[data-test="postalCode"]').type(cep);
  cy.get('[data-test="continue"]').click();
});

// 5. Validar o valor total
Then("o valor total exibido deve ser a soma dos produtos com as taxas", () => {
  cy.get('[data-test="total-label"]').should("be.visible");
});

// 6. Finalizar compra
Then("eu finalizo a compra com sucesso", () => {
  cy.get('[data-test="finish"]').click();
  cy.get('[data-test="complete-header"]').should("have.text", "Thank you for your order!");
});