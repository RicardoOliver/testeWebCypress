Feature: Login site automationpractice
   
  Background: Acessar o site da automationpractice
   Given acesso o site automationpractice
   
   @testedois
   Scenario Outline: Realizar login com dados validos
    And informoOEmail <email> valido
    And informoASenha <senha> valido
    When clico no botão de sign in
    Then devo visualizar mensagem de Welcome 

    Examples:
    | email           | senha |
    | rcd@gmail.com  | teste92020 |
            