function validateLogin() {
    // Obtenha os valores do email e senha
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verifique se o email e a senha estão corretos (use lógica de validação real aqui)
    var emailCorreto = "luiz@gmail.com";
    var senhaCorreta = "123";

    if (email == emailCorreto && password == senhaCorreta) {
        // Login bem-sucedido, redirecione para a página principal ou faça o que for necessário
        alert("Login bem-sucedido! Redirecionando para a página principal.");
        // window.location.href = "pagina_principal.html";
    } else {
        // Email ou senha incorretos, exiba um alerta
        alert("Email ou senha incorretos. Tente novamente.");
    }
}
