function validateForm(event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;

  if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
    showMessage("error", "Por favor, preencha todos os campos.");
  } else if (senha !== confirmarSenha) {
    showMessage("error", "As senhas não coincidem.");
  } else {
    showMessage("success", "Cadastro realizado com sucesso!");
    document.getElementById("cadastroForm").reset();
  }
}

function showMessage(type, message) {
  var messageElement = document.getElementById("mensagem");
  messageElement.className = type + "-message";
  messageElement.textContent = message;

  if (type === "error") {
    messageElement.style.color = "red";
  }
}
