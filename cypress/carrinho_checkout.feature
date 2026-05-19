# language: pt
Funcionalidade: Jornada de Compra no E-commerce
  Como um usuário autenticado
  Quero gerenciar meu carrinho e finalizar a compra
  Para garantir que o fluxo de checkout funciona ponta a ponta

  Contexto:
    Dado que eu estou logado no sistema e na página de produtos

  Cenário: Adicionar múltiplos produtos e validar o valor total
    Quando eu adiciono os seguintes produtos ao carrinho:
      | produto                     |
      | Sauce Labs Backpack         |
      | Sauce Labs Bolt T-Shirt     |
    E avanço para a página de checkout
    E preencho os dados de envio com "Ana", "Silva" e "01001-000"
    Então o valor total exibido deve ser a soma dos produtos com as taxas
    E eu finalizo a compra com sucesso