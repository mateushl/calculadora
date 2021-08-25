let resultado = document.getElementById('resultado').innerHTML 
if(resultado == false) {
  document.getElementById('resultado').innerHTML = '0'
}
function inserir(num) {
  let numero = document.getElementById('resultado').innerHTML += num
}
function limpar() {
  document.getElementById('resultado').innerHTML = "0"
}
function apagar() {
  resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular() { 
  resultado = document.getElementById('resultado').innerHTML 
  if(resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado) // Aqui está sendo feito os cálculos
  } else {
    document.getElementById('resultado').innerHTML = '0'
  }
}