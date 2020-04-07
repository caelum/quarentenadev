var contadorEmitir = 0
var contadorTimeout = null
function emitirCertificado(nome = "") {
  clearTimeout(contadorTimeout)
  
  var numeroChamadas = 1000000
  contadorEmitir = contadorEmitir + 1
  
  if(contadorEmitir == 1) {
     contadorTimeout = setTimeout(function() {
      alert(`
        No seu código, chame emitirCertificado() novamente!
      `)
       contadorEmitir = 0
    }, 1000)
  }
  else if(contadorEmitir == 2) {
    contadorTimeout = setTimeout(function() {
      alert(`
        Ainda não! Chame emitirCertificado() mais uma vez no seu código!
      `)
       contadorEmitir = 0
    }, 1000)
  }
  else if(contadorEmitir < 10) {
    contadorTimeout = setTimeout(function() {
      alert(`
        Você chamou a função apenas ${contadorEmitir} ${
          contadorEmitir == 1 ? 'vez' : 'vezes'
        }. 
        Você precisa chamar essa funcão 1 milhão de vezes.
        Faltam ${ numeroChamadas - contadorEmitir}!
      `)
       contadorEmitir = 0
    }, 1000)
  }

  if(contadorEmitir >= numeroChamadas) {
    contadorEmitir = 0
    confirm(`
      Parabéns${nome !== "" ? ' ' + nome : ''}! Você concluiu a #quarentenaDev =D
      Continuar para o certificado?
    `) 
  }
}
