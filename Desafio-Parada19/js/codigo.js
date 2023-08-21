document
  .getElementById("formRegistro")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var telefoneErro = document.getElementById("telefoneErro");

    // Verifica se o campo "telefone" contém apenas números
    /* if (!/^\d+$/.test(telefone)) {
      telefoneErro.innerHTML =
        "O campo de <b>Telefone</b> deve conter apenas números";
      return;
    } */

    // Essa expressão regular valida o formato do telefone
    if (!/^(\(\d{2}\)\s\d{4,5}-\d{4})$/.test(telefone)) {
      telefoneErro.innerHTML =
        "O campo <b>Telefone</b> deve estar no formato (00) 00000-0000 ou (00) 0000-0000.";
      return; // Impede o envio do formulário se houver erro
    }

    // Limpa a mensagem de erro
    telefoneErro.textContent = "";

    var table = document.getElementById("tabelaRegistro");
    var row = table.insertRow(-1); // Insere uma nova linha no final da tabela

    var nomeCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var telefoneCell = row.insertCell(2);

    nomeCell.textContent = nome;
    emailCell.textContent = email;
    telefoneCell.textContent = telefone;

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
  });

// Limpa os campos do formulário
document.getElementById("limparBotao").addEventListener("click", function () {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
});

// Limpa todos os dados da tabela
document
  .getElementById("limparTabelaBotao")
  .addEventListener("click", function () {
    var table = document.getElementById("tabelaRegistro");
    var rowCount = table.rows.length;

    // Remove todas as linhas
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  });
