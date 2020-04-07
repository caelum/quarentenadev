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
      alert(`Boa! Mas você precisa chamar essa funcão 1 milhão de vezes.\nVocê já chamou a função ${contadorEmitir} ${
          contadorEmitir == 1 ? 'vez' : 'vezes'
        }.\nFaltam ${ numeroChamadas - contadorEmitir}!`)
       contadorEmitir = 0
    }, 1000)
  }

  if(contadorEmitir >= numeroChamadas) {
    contadorEmitir = 0
    if(
      !confirm(`Parabéns${nome !== "" ? ' ' + nome : ''}!\nVocê concluiu a #quarentenaDev =D\nContinuar para o certificado?`) 
    ){
      document.documentElement.classList.remove('paginaCertificado')
    } else {
      document.documentElement.classList.add('paginaCertificado')
      
      var nomesAulas = {
        0: 'Calculadora de dias vividos',
        1: 'Calculadora de app de transporte',
        2: 'Currículo',
        3: 'Ficha da academia',
        4: 'Certificado'
      }
      
      return `
        <style>
         @import "https://caelum.github.io/quarentenadev/certificado.css?";

          body {
            text-align: center;
            color: #525f6b;
          }


          h1 {
            padding-top: 1em;

            border-bottom: 2px solid orange;

          /*   background-color: #4a535a; */
            color: #4a535a;
            margin-bottom: .25em;
            font-weight: lighter;
            font-family: 'Helvetica';
          }

          p {
            font-size: .75em;
          }


          strong {
            background: orange;
            color: white;

            padding: 2px 5px;

            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: normal;
          }

          h2 {
            font-size: .75em;
            text-transform: uppercase;
            margin-top: 2em;

            color: #48CCCA;
          }

          ol {
            text-align: left;
            list-style-position: inside;
            padding: 2em;
            font-size: .5em;
            margin-top: 1em;
          }

          div {
            width: 9rem;
            height: 9rem;
            line-height: 9rem;

            font-size: .3em;
            display: block;
            margin: auto;
            border: 1px solid #999;
          }

        </style>

         <h1> ${nome} </h1>

          <p>
            participou da <strong> #quarentenaDev </strong>
          </p>

          <h2> Códigos feitos: </h2>
          <ol>
            ${
              codigos
                .map((item, posicao) => `
                  <li> <a href="${item}">${nomesAulas[posicao]}</a> </li>
                `)
                .join('\n')
            }
          </ol>
      `
    }
  }
}
