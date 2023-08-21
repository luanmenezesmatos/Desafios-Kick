function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    document.getElementById("resultContainer").style.display = "none";
    alert("Por favor, insira somente números nas notas.");
    return;
  }

  if (
    nota1 < 1 ||
    nota1 > 10 ||
    nota2 < 1 ||
    nota2 > 10 ||
    nota3 < 1 ||
    nota3 > 10
  ) {
    document.getElementById("resultContainer").style.display = "none";
    alert("As notas devem estar entre 1 e 10.");
    return;
  }

  var media = (nota1 + nota2 + nota3) / 3;
  var mediaLabel = document.getElementById("media");
  var resultadoLabel = document.getElementById("resultado");

  mediaLabel.innerText = media.toFixed(2);

  if (media >= 6) {
    resultadoLabel.innerText = "Aprovado!";
    resultadoLabel.style.color = "#4CAF50";
  } else {
    resultadoLabel.innerText = "Reprovado!";
    resultadoLabel.style.color = "#f44336";
  }

  document.getElementById("resultContainer").style.display = "block";
}
