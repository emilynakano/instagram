export default function Posts() {
    return(
      <div class="posts">
        {items.map(item => <Post img= {item.img} usuario= {item.usuario} imgConteudo= {item.imgConteudo} curtido= {item.curtido} numeroCurtidas= {item.numeroCurtidas}  imgProfile= {item.imgProfile}/>)}
      </div>
    )
}
const items = [
    {
        img: "assets/img/meowed.svg",
        usuario: "meowed",
        imgConteudo: "assets/img/gato-telefone.svg",
        curtido: "respondeai",
        numeroCurtidas: "110",
        imgProfile: "assets/img/meowed.svg"
    },
    {
        img: "assets/img/barked.svg",
        usuario: "usse",
        imgConteudo: "assets/img/dog.svg",
        curtido: "ddog",
        numeroCurtidas: "217",
        imgProfile: "assets/img/dog.svg"
    }
]

function Post(props) {
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

          <div class="conteudo">
            <img src={props.imgConteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
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