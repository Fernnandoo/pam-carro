var consumo = 0;
function exibirConsumo() {
    var divConsumo = document.getElementById("consumo");
    divConsumo.innerHTML = "Seu " + marca1 + " " + modelo1 + " fez " + consumo.toFixed(2) + " KM/L";
}

function calcular() {
    var km = document.getElementById("km").value
    var gas = document.getElementById("gas").value
    var marca = document.getElementById("marca").value
    var modelo = document.getElementById("modelo").value
    var consumo1 = km / gas
    consumo = parseFloat(consumo1.toFixed(2));
    marca1 = marca
    modelo1 = modelo

    exibirConsumo();
}
