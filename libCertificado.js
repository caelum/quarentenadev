var contadorEmitir = 0
var contadorTimeout = null
function emitirCertificado(nome = "") {
  clearTimeout(contadorTimeout)
  
  var numeroChamadas = 1000000
  contadorEmitir = contadorEmitir + 1
  
  if(contadorEmitir == 1) {
     contadorTimeout = setTimeout(function() {
      alert(`Achou que ia ser fácil?\nChame a função emitirCertificado() de novo lá no seu código!`)
       contadorEmitir = 0
    }, 1000)
  }
  else if(contadorEmitir == 2) {
    contadorTimeout = setTimeout(function() {
      alert(`Ainda não!\nChame emitirCertificado() mais uma vez no seu código!`)
       contadorEmitir = 0
    }, 1000)
  }
  else if(contadorEmitir < 10) {
    contadorTimeout = setTimeout(function() {
      alert(`Boa! Mas você precisa chamar essa funcão 1 milhão de vezes.\nVocê chamou já chamou a função ${contadorEmitir} ${
          contadorEmitir == 1 ? 'vez' : 'vezes'
        }.\nFaltam ${ numeroChamadas - contadorEmitir}!`)
       contadorEmitir = 0
    }, 1000)
  }

  if(contadorEmitir >= numeroChamadas) {
    contadorEmitir = 0
    confirm(`Parabéns${nome !== "" ? ' ' + nome : ''}!\nVocê concluiu a #quarentenaDev =D\nContinuar para o certificado?`) 
  }
}
