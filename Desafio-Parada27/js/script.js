document.getElementById("cep").addEventListener("input", function (event) {
  var cep = event.target.value;

  cep = cep.replace(/\D/g, "");

  cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  event.target.value = cep;

  if (cep.length === 9) {
    buscarEndereco(cep);
  } else {
    limparCamposEndereco();
  }
});

function buscarEndereco(cep) {
  var xhr = new XMLHttpRequest();

  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var endereco = JSON.parse(xhr.responseText);

      document.getElementById("rua").value = endereco.logradouro;
      document.getElementById("bairro").value = endereco.bairro;
      document.getElementById("cidade").value = endereco.localidade;
      document.getElementById("estado").value = endereco.uf;
    }
  };

  xhr.send();
}

function limparCamposEndereco() {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
