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
          ${ CSSCertificado() }
        </style>

        ${ spriteLogosCertificado }

         ${ HTMLCertificado(nome) }
          
      `
    }
  }
}

var HTMLCertificado = nome => `
  <h1>${nome}</h1>

  <p>
    participou da <a target="_blank" href="https://www.alura.com.br/quarentenadev">quarentenaDev </a>
  </p>

  <h2> Códigos feitos: </h2>

  <footer>
    <a target="_blank" href="https://www.caelum.com.br">
      <svg>
        <use xlink:href="#caelum--small"></use>
      </svg>
      <span>caelum.com.br</span>
    </a>

    <a target="_blank" href="https://www.alura.com.br">
      <svg>
        <use xlink:href="#alura--small"></use>
      </svg>
      <span>alura.com.br</span>
    </a>
  </footer>
`

var CSSCertificado = () => `
  html {
    overflow: auto;
  }

  a { 
    color: inherit;
    text-decoration: none;
    transition: color .2s ease;
  }

  a:hover {
    color: #454545;
  }

  body {
    position: relative;

    text-align: left;
    color: #525f6b;

    overflow: hidden;
  }

  body:after {
    content: "Certificado";

    position: absolute;
    right: 0;
    bottom: 0;

    transform-origin: 100% 100%;
    transform: 
      rotateZ(-90deg) 
      translateX(150%);

    text-transform: uppercase;
    font-weight: lighter;
    font-size: 1.25em;

    color: #F4F4F4;
  }

  h1, p, h2, ol, footer { 
    padding-left: 2rem;
    padding-right: 2rem;
  }


  h1 {
    margin-bottom: .25em;
    padding-top: 1em;
    padding-bottom: .5em;
    padding-right: 25%;

    font-weight: bold;
    font-family: 'Helvetica';
    font-size: 1.3em;
    letter-spacing: -.087em;

    border-bottom: 3px solid orange;
    background-color: #e7edf2;
    color: #4a535a;
    color: rgba(0,0,0,.6);
  }

  h1:after {
    content: '_';
  }

  p {
    font-size: .75em;
  }


  p a {
    background: orange;
    color: white;

    padding: 0.087em 0.2175em;

    text-transform: uppercase;
    letter-spacing: 0.087em;
    font-weight: normal;
  }

  p a:hover {
    color: whitesmoke;
    text-decoration: none;
    background-image: linear-gradient(
      rgba(255,255,255,.1),
      rgba(255,255,255,.1)
    );
  }

  p a:before {
    content: '#';
  }

  p a:hover:before {
    font-weight: bold;
  }


  h2 {
    font-size: .75em;
    text-transform: uppercase;
    margin-top: 2em;

    color: #48CCCA;
  }

  ol {
    text-align: left;
    list-style-position: outside;
    margin-top: 1em;
    margin-left: 2rem;
    padding: 2em 3.5em 2em 2em;

    column-count: 2;
    column-gap: 3em;

    word-break: break-all;
    font-size: .5em;
  }

  li {
    break-inside: avoid;
  }

  li + li {
    margin-top: .25em;
  }

  a:hover {
    text-decoration: underline;
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

  footer {
    position: absolute;
    padding-bottom: .25em;
    bottom: 0;
    left: 0;
    right: 0;

    text-align: left;

    background: inherit;
  }


  footer a {
    font-size: 1em;
    text-decoration: none;
    color:   lightgrey;

    display: inline-flex;
    align-items: center;
  }

  footer a[href*='alura']:hover {
    color: #414040;
  }

  footer a[href*='caelum']:hover {
    color: #241f20;
  }

  footer a svg {
    width: 1em;
    height: 1em;
  }

  footer a span {
    font-size: 0.5em;
    margin-left: .75em;
  }

  footer a + a {
    margin-left: 2em;
  }

`

var spriteLogosCertificado = `
  <svg style="display: none;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <symbol id="alura--small" viewBox="0 0 23 23">
              <circle fill="currentColor" cx="11.5" cy="11.5" r="11.5" />
              <title>Alura</title>
              <path fill="#FFF"
                  d="M15.6 4.1c-.9-.7-2.2-1.1-4.1-1.1-1 0-1.8.1-2.4.3-.7.2-1.3.5-1.7.8-.5.3-.8.8-1 1.2-.2.5-.3 1-.3 1.5v.6c0 .1.1.2.2.2h2.3c.1 0 .2-.1.2-.2 0-.5.2-1 .6-1.4.4-.4 1.1-.6 2.1-.6.5 0 1 .1 1.3.2.3.1.6.3.8.5.2.2.4.4.4.6.1.2.1.4.1.6v.6c0 .2 0 .5-.1.7 0 .1-.1.3-.2.4-.1.1-.3.2-.4.3-.1.1-.2.1-.3.2-.1 0-.3.1-.6.2s-.7.3-1.2.4c-.5.2-.9.3-1.4.5-.5.2-.9.3-1.3.4-.8.3-1.3.7-1.8 1.4-.4.6-.6 1.4-.6 2.2v1.5c0 .4.1.8.2 1.2.1.4.4.9.8 1.2.4.4 1 .7 1.6 1 .7.2 1.6.4 2.7.4s2-.1 2.7-.4c.7-.3 1.2-.6 1.6-1 .4-.4.7-.8.8-1.2.1-.4.2-.9.2-1.2V6.8c.1-1.1-.3-2-1.2-2.7zm-1.4 11.2c0 .8-.2 1.3-.6 1.8-.4.4-1.1.6-2.2.6-1 0-1.7-.2-2.1-.6-.4-.4-.6-1-.6-1.8 0-.4.1-.7.2-1 .2-.3.3-.5.5-.6.2-.2.5-.3.7-.4.3-.1.7-.2 1.1-.4.3-.1.7-.2 1-.4.4-.1.7-.2 1-.4.2-.1.3-.1.5-.2s.3-.3.3-.5v3.9z" />
          </symbol>
          <symbol id="caelum--small" viewBox="0 0 32 32">
              <title>Caelum</title>
              <switch>
                  <g>
                      <path fill="currentColor" class="st0" d="M10 5v7h12V1zM10 31l12-4v-7H10z" />
                  </g>
              </switch>
          </symbol>
      </defs>
  </svg>
`
