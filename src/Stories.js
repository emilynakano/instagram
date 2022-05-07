
export default function Stories() {
    return(
      <div class="stories">
          {items.map(item =>  <Story img={item.img} usuario={item.usuario} />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    )
}
const items = [
    {
        img: "assets/img/9gag.svg",
        usuario: "sim"
    },
    {
        img: "assets/img/meowed.svg",
        usuario: "oii"
    },
    {
        img: "assets/img/meowed.svg",
        usuario: "tdoo"
    },
    {
        img: "assets/img/memeriagourmet.svg",
        usuario: "aaaaaaaaaaffff"
    },
    {
        img: "assets/img/9gag.svg",
        usuario: "9gag"
    },
    {
        img: "assets/img/meowed.svg",
        usuario: "oinao carai"
    },
    {
        img: "assets/img/meowed.svg",
        usuario: "tdoo"
    },
    {
        img: "assets/img/memeriagourmet.svg",
        usuario: "aaaaaaaaaaffff"
    }
]

function Story(props) {
    return(
        <div class="story">
            <div class="imagem">
            <img src={props.img} />
            </div>
            <div class="usuario">
            {props.usuario}
            </div>
        </div>
    )
}