import Sugestao from "./Sugestao"
export default function Sugestoes() {
    return (
      <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {items.map(item => <Sugestao img={item.img} nome={item.nome}/>)}

    </div>
    )
}
const items = [
  {
    img:"assets/img/razoesparaacreditar.svg",
    nome: "razoesparaacreditar"
  },
  {
    img:"assets/img/bad.vibes.memes.svg",
    nome: "bad.vibes.memesss"
  },
  {
    img:"assets/img/smallcutecats.svg",
    nome: "smallcutecats"
  },
  {
    img:"assets/img/adorable_animals.svg",
    nome: "adorable_animals"
  },
  {
    img:"assets/img/chibirdart.svg",
    nome: "chibirdart"
  }
]