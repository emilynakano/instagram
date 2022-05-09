import React from 'react';
export default function Post(props) {
    const [ion, setIon] = React.useState("heart-outline")
    const [color, setColor] = React.useState("")
    function heart() {
      setIon("heart")
      setColor("heart")
      if(color !== ""){
        setColor("")
        setIon("heart-outline")
      }
    }
    function heartImage() {
      setIon("heart")
      setColor("heart")
    }
      return (
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.img} />
                {props.usuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
  
            <div class="conteudo" onClick={heartImage}>
              <img src={props.imgConteudo} />
            </div>
  
            <div class="fundo">
              <div class="acoes"> 
                <div>
                  <ion-icon onClick={heart} name={ion} class={color}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
  
              <div class="curtidas">
                <img src={props.imgProfile} />
                <div class="texto">
                  Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.numeroCurtidas} pessoas</strong>
                </div>
              </div>
            </div>
        </div>
      )
  }