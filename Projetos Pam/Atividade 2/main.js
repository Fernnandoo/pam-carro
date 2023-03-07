
var resultado = 0;
function exibirResultado() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "Seu IMC é: "+resultado.toFixed(2) ;
}

function calcular() {
  var alt = document.getElementById("alt").value;
  var kg = document.getElementById("kg").value;

  qua = alt * alt
  resultado1 = kg / qua;
  resultado = parseFloat(resultado1.toFixed(2));

  exibirResultado();
}

window.onload = function() {
  exibirResultado();
};
