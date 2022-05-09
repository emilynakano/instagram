export default function Sugestao(props) {
    return (
      <div class="sugestao">
          <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <div class="nome">{props.nome}</div>
              <div class="razao">Segue ovocê</div>
            </div>
          </div>
  
          <div class="seguir">Seguir</div>
        </div>
    )
  }