/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given("acesso o site automationpractice", () => {
    loginPage.acessarSite();
})


And("informoOEmail {} valido", (email) => {
    loginPage.informarEmail(email);
})

And("informoASenha {} valido", (senha) => {
    loginPage.informarSenha(senha);
})


When("clico no botão de sign in", () => {
    loginPage.clicarBotaoRealizarLogin();
})


Then("devo visualizar mensagem de Welcome", () => {
    loginPage.visualizarWelcomeLogin();
})