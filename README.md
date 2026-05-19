# 🛒 Automação de Testes de E-Commerce com Cypress e Cucumber

![Cypress](https://img.shields.io/badge/-Cypress-%2317202C?style=for-the-badge&logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/-Cucumber-%2323D160?style=for-the-badge&logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Webpack](https://img.shields.io/badge/-Webpack-%238DD6F9?style=for-the-badge&logo=webpack&logoColor=black)

Este projeto demonstra a implementação de uma arquitetura moderna de testes automatizados ponta a ponta (E2E) na plataforma de e-commerce [Sauce Demo](https://www.saucedemo.com/), utilizando **Cypress** integrado ao **Cucumber (BDD)** e estruturado com **Webpack** para garantir máxima estabilidade e performance na compilação.

O foco principal foi validar a jornada crítica de compra do usuário, abordando desde a autenticação, gerenciamento dinâmico de múltiplos produtos no carrinho, até a validação de taxas e finalização do checkout.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Cypress (v13+)** | Framework de automação focado em testes de interface (UI) rápidos e confiáveis. |
| **Cucumber (Gherkin)** | Abordagem de Desenvolvimento Orientado a Comportamento (BDD) em Português. |
| **Webpack Preprocessor** | Configuração robusta de empacotamento de módulos para tradução dos arquivos `.feature`. |
| **JavaScript (ES6)** | Linguagem padrão para o desenvolvimento dos *Step Definitions*. |

---

## 📋 Estrutura do Projeto

A arquitetura foi desenhada seguindo as melhores práticas de isolamento e organização do ecossistema Cypress/Cucumber:

```text
├── cypress/
│   └── e2e/
│       ├── carrinho_checkout.feature   # Cenários de negócio descritos em Gherkin
│       └── step_definitions/
│           └── carrinho_checkout.js    # Implementação lógica dos passos em JS
├── cypress.config.js                   # Configurações do Cypress, Webpack e redes/proxies
└── package.json                        # Gerenciamento de dependências e scripts do Node.js
