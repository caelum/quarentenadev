
var contadorDeChamadas = 0
var contadorTimeout = null
var contadorDeEmissoesDeCertificado = 0

function emitirCertificado(nome) {
  contadorDeChamadas = contadorDeChamadas + 1

  clearTimeout(contadorTimeout)
  const numeroChamadas = 1000000
  
  if(contadorDeChamadas < numeroChamadas && contadorDeEmissoesDeCertificado == 0) {
    
      let mensagemTimeout
    
      if(contadorDeChamadas == 1) {
        mensagemTimeout = `Achou que ia ser fácil?\nChame a função emitirCertificado() de novo lá no seu código!`
      }
      else if(contadorDeChamadas == 2) {
        mensagemTimeout = `Ainda não!\nChame emitirCertificado() mais uma vez no seu código!`
      }
      else if(contadorDeChamadas < 100){
        mensagemTimeout = 
          `Boa! Mas você precisa chamar essa funcão 1 milhão de vezes.\nVocê já chamou a função ${contadorDeChamadas} ${
            contadorDeChamadas == 1 ? 'vez' : 'vezes'
           }.\nFaltam ${ numeroChamadas - contadorDeChamadas}!`
      }
    
      if(mensagemTimeout !== undefined) {
        contadorTimeout = setTimeout(function() {
          alert(mensagemTimeout)
          contadorDeChamadas = 0
        }, 1000)
      }

  } else {
    
      nome = nome === "" || nome === undefined
        ? "[nome está vazio]"
        : nome

      const __certificado = `
        <style>
        ${ CSSCertificado() }
        </style>

        ${ spriteLogosCertificado }

        ${ HTMLCertificado(nome) }

      `

    if(contadorDeEmissoesDeCertificado > 0 && contadorDeChamadas > numeroChamadas) {      
      const totalChamadasLoopInfinito = contadorDeEmissoesDeCertificado * numeroChamadas + contadorDeChamadas
      alert(
        `Loop Inifinito!\nVocê chamou a função emitirCertificado() ${totalChamadasLoopInfinito} vezes`
       )
      return __certificado
    } 
    else if(contadorDeEmissoesDeCertificado == 0 && contadorDeChamadas >= numeroChamadas) {
      contadorDeEmissoesDeCertificado = contadorDeEmissoesDeCertificado + 1
      contadorDeChamadas = 0
      document.documentElement.classList.add('paginaCertificado')

      document.body.querySelectorAll('*').forEach(
        elemento => elemento.style.display = 'none'
      )

      const divMensagem = document.createElement('div')
      divMensagem.innerHTML = `
        Sucesso! 
        <br>
        Agora só falta colocar o HTML do certificado na tela.
        <br>
        Esse HTML foi retornado pela função emitirCertificado()
      `
      document.body.appendChild(divMensagem)
      alert(
        `Parabéns ${nome}!\nVocê concluiu a #quarentenaDev =D\nContinuar para o certificado?`
      )

      return __certificado
    }
    else if(contadorDeEmissoesDeCertificado > 0 && contadorDeChamadas <= numeroChamadas) {
      return __certificado
    }
  }
}

const HTMLCertificado = nome => `
  <h1>${nome}</h1>

  <p>
    participou da <a target="_blank" href="https://www.alura.com.br/quarentenadev">quarentenaDev </a>
    <span>
      de 30/03/2020 a 10/04/2020
    </span>
  </p>

  <h2> Códigos feitos: </h2>

  <footer>
    <figure>
      <img src="${assinaturaImagem}">
      <figcaption>
        Paulo Silveira
        <br>
        CEO do Grupo Caelum Alura
      </figcaption>
    </figure>
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

const CSSCertificado = () => `
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


  p span {
    display: block;
    margin-top: .5em;
    font-size: .75em;
    letter-spacing: -0.075em;
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
    margin-left: 2rem;
    padding: 2em 3.5em 2em 2em;

    column-count: 2;
    column-gap: 3em;

    word-break: break-all;
    font-size: .5em;
  }

  li {
    break-inside: avoid;
    line-height: 1.25;
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
    padding-top: .125em;
    padding-bottom: .5em;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    text-align: left;

    background: inherit;
  }

  footer figure {
    font-size: .4em;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }

  footer figcaption {
    text-align: center;
    padding-top: .25em;
    border-top: .025em solid orange;
  }

  footer img {
    width: 10.5em;
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

  footer > * + * {
    margin-left: 2em;
  }
`

const spriteLogosCertificado = `
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

const assinaturaImagem=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAAAyBAMAAACjacF7AAAAJFBMVEUGBgYZGRkvLy9ISEhmZmaEhISjo6O+vr7V1dXn6Oj19vX///976kexAAAMsklEQVRo3tVay18ayxLuAf+AQTRrHnqyBRTNUnyf3Y3ig7OLjyhZRmN8LBWjuA2osL0KTO+P0Pxz96vqnmEQhXNvzOLOLyeHyExPV9X3VX1VrWj/v19CtaX54zSuvuM6rsjOz9w/v/gW1fjx/fOx/D0WeJ8aR7tzUdsKxReL/FL6S7offvGq787aoZHT3xYDcrJzm02FBF/DixWlVJu+gP9hAP/1C5dzORfFuoH8b4yBwktsvMQankQcwvtd8f7V4De+zdLaIvzld1mAEDiX/BIrvXd1dbQaGi+2uzhAUfqfw9A4THJk03uV3xcDY4BIH1ccx/kxG86b/WoyKP70ApR+nPwDCuyQAYHJ9eMuA1rfK29mAbzcXNFhzjNgVCE6LcnvLhmMET1Xa3VKDoYQUSC8cPxsw48T+beMQSkiArBhqQLIYM/1zGjVzwOOwQs21BIj1UFptIAIWJMb186zn5/b029ogTwQwwsJETyRGjeNrZEbCgFZozwg9drw0w4OsEBdZsCAngAgfJ/E+zdkcnvLWrxKiD+qbal3fTB047GAdi5fzEjqqxgdYEF9BQhav+59tpmwlt8SRYfjxbJtbbovcraGztq8b0MDyka9yaj1r0F+VBe2CO9VXiDLYyTw5S1jcHfsXIjgaZvJK9uNlZEb5fFXKmPMcxOeElZuQAgyIrzvvPTNT3vk5i15oKT6JEY9X9WShA6lgSR9ebX7KtuBYv/FS3Zw88VspQ4Is2+qi+ozgjIoZX2lCqFpOL5xucs1iCpaW/baoC4G0QB3TD3jcG2PH2l9FMsDErEq779s/N3n9RPZa8FjRCNCp6JAjqtcNL4pX9cUrS0yuu/1057qJoEqxfM6Dw+kQetgzI8z6WKhlo3FFou9uujCDp4qk/nLSahIVZ6FTh3rIyebmUE0aNdmUcq6TLiw2OqSPTSIBq1PPiPV/f29Xqe+HbVCwxuyx4It0MDkzvp2aKqi6qt2IL1qLb8ehHIkOEguq2+p4ck9v8MuOG59aeBcVbQF1l/uMvWj7PyCTvDfkmJsLTlefG5BM2NoINtOIRnOo5ZGxPhxAUh/FSgDacCaIhmKb/heV4oS/lsfrQ/P1lWdIpjNa7IPn3rdxURUhE91VEV44y7jF+qiQwMtim5nEQIqRcF9pyRezzYI2/vBuvv+Wwr9RmeRevb0RRqoH4by6nYupNVWecE4qHUIaWWNnNG3h7Y1Valn/OVQuGnvVMvs29XQWF4iBNZUUZWEddpBkaM/OW6ut/78B+1l/dtsKNwxQV1VWYcNdXtG3WaNV+9WbTHCL2pduUGBtArPr9ODdYQgz4h5ZgFwOVqlkqXqO5HAUhU1TQQhVC+E5WPTXUXvoWLC1qGBc3/vvAokKPfwRvVZNXjXHT61HcoZf0eE6NaL2AvCeF1hnRixpquU+v+Q3RY0PhIN2IColS5KVU5QJlfnQnzxYlDPbjISjbcubI8G9d3swkbldRPmQka3e3nYeiZMy0mT18rUTAxVuxJwRFiLRc6mrRUKAcRAjwU16AOqZg1iOjDUOhCBTRS1c0JRh4T0GDUPz2igDqOWCG/K12vTbChd9HWsTzNUcJAiPSG2LfQYoLFtC5stMEpYUdkRblJ/hGPxXS3ipyB1+oYGbAB6ZEV6ZqTINcsqopZIFtfbbHhzRWPQx6Zb7iJHin3K66ylS3DjWrcjQbq5uVb0Gg3eGW5EozIHHuB99YpG7mOEvOlWLTYddz3jgcM0cG7RD4Y3KooXWsIqAFfQKzw1TrjKfbojLslv4Ylov0mEc5kcKzKOF3U1GKct/Z3KuSxg1rF7rPSqGMXnxg5htrG6cSCEm/0BIvbThd2diyTt9H2lcZSNkgEUwAMRpO3VE1wPuFDAcfRYa1vw03CH63RwJrD+fSe03LfbH85RHVghkjY/ajnyaBtVcpvQBY4gH/6cQawV1CV9WUuMJYW16UryhGXqYcCnBgTfJ8Y/r6VsK75RIS0N9o9XsUqZ8aarMhBFXn7Egnn9T0MmOBBOUnhjv6Ray9Aea4nRqmYd79fWaFYHpjdBCAKLOzaJPlVg80q2ZXv4VD9tDjRkoV8NIAZkeiAWDYUmN4q0XXWbYNhCWhoFKRlEWAkVRT8Npix7LAhCRdYzfWWeOkA/gG0RQArMOlpeW6CX5lxJioHnSs629QE/OieGuSoWyYPvo/tdcCvJPDjXo7r0fqXNrX7BBsYVZQhIEz26a3yzBUolHkZ4mEyBv7w2jNzbTPa34GH4C8shSX/zBvB/toC8ws82tkVgISUCILVscr1EHys6/tbSh4nsJlN1d00xcLZo//H1E4fwLonY3KPBz4EzndScQoqwR9vV0uzC1jqFQ5pnJPafPTxGc0wA5qNGvcnH8IrOAiDUMKCcJvVfTpCuw+JCvKt2OtOcjp2XiurZKQketNALTizsFaU2QOr6xmkHGpjV3u0sp0tq3JlXAL+pZ2AX76dg9+/cH0N/EgFw01NSp9aWtoC8wmFtIadZmMzsaxhQLmnO4H1eK/TTHjrVGcmV9Y3DyGhVMLM2jnUnwi1xjQoOGH0ozDYhuNn3RBjBSbRl0gmn6DybNEAlPYSWJXiZZwDm2p014BWdbGpcVsa4MwPCqIFoJgCiM3cJI8mRd4zWoWHUH1IQxUeKjsP9pV/4I+aQL9z5k1gJ5GWT4MYYfkoY1wAK4xVmdv/JtDq3coqnCcjmelMAKUls0JfrMdGBDDDNATvv74joSHhlOlPEjHM9FUqCtjD8cns5XCUb3Y4kEGmgOoUE11z+iV7x0Tb1rDmjy4Mps68XhI/WF8CGygHK540eddCOSLdxOMFT4WkT3ba3H2DUB09NzbCT6AGdy25XOK0IWjynJ13STc8k0J0DmyyguTatjRWRKyyTNgrGj65CxebG+7Y7l5HgWSvDqWjFOOwpQsCjTP7FKAsRcLvHv7l8tv9tQGukBzsJ2kgMnXG/abPOE+opEjh1x0EkgdQWnpaKEifeJaGOhQiBPA7indaR9/zYLmmBUE70nz0A7O+qNe30jAHgE3VVKGKm4Xy0SYK6elSz6yc264X2kcUwgw1eU3c7pFkrVNEeMHwysy092Nqip1F9RDwycn13lEKqncND1Lblt7Ui+Wr8CPX6gePV/4AGxqOtfOB5CHCnMwks+IuLqf7nQ6f4Nu62GSik7jsyWpdwsCeYtDbvf6zCAFa8Are9q5ospHjA+wkxUdhvYC9jpen8KLAEn1+jwZuuXLgWmFT0Vfyp6/LoTb/RT4bId8G1uD5jgEEWUHoeLRoLTGycu6O5CIOSCtqmb3w2rXPv1IE9lk0hZGM8NxKY1r03lUAPqFufkBsYMth0CPhBn4sZ71GSZHpJq7EtkzuBuByrU2vpOYha3rwXnSteW1UaevXEkK6FdYQElT5g4PegFT72n42ZuklazNefkHa8hS/yt0krJHTlYAtmXAjziSDFAGkHdwZysoajHSu+XoTPw7PMs8cIo/YrVUyFDEwfSM8EewZYtYWie0S3ypQDhTn/JwjayN7IyOsZLwSwYAg5Hfsn79qMNFQM3zikhEa0cUi+QOtvWcNpM4kSKkL1wT2rITm0NVIknk9ByF2uza/R7JnUhEUy/SkZzKMp/gpi3//4fIM0v9wARqypnkxUji3d03W3S27A4Qqkzibn35Fi4/5oH9JHxITXvZBm2Dhao/0La0JrP69uGgs20Wdw+rnbza6tu4cqQtkUKakTEcfgILy3G6EjKeo777lYo1ESfMKJFje9tpY/sBY/r83Fz4Cq8SNSHL08riXDa7iy8zQqSZ9yNuRtZYLru9kJeJLqo9e9UD2Ip6JaYu7oHhxjpZxfWU0hLVqL1WejBcSAB4DuMYeiTjgOni9VfWOo1goGV9IoYBGaLkWGAVaMcJ6SAaZ6byqFzLFCIT6fA+XYC7wtSKpYFEHTge2Yjt7JPc4+0ZM9MvbUP+UMp7yWWflPxLfemcG0lPq/OoU9fe0//QOczFkqppFgSJ1qBM2FucsfXiy+1NTo81HyKSO2HNWQKETp2PqElopN+ubTl/rQls7czl3l5J8KKhp8xXsHCqJdznkHBdoG5zIVm6RE5bfB8Q4XVmPIK4XUxALnssZOKr708qQF0z8KQGxRZ6WaOb1srsYm+GAK41D/+VTrMBWLxRcBb1Wa1EPSw64yiQdfMIB0kXtKJqWZcTh3VxX52hG4atDky2ng4FmrWXySr8zrdufn5xdOzNfecAVPGv3S/SBee63XUmZm/2zhxlXF6fObIdLDknfaIX/1l0JAuHvnv/ilBjnoXvn6GY4nitydS/l7fpfmd/1miO/ATJoCTQBR/w8W/Aeodz5/WjUobwAAAABJRU5ErkJggg==`
