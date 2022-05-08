export default function User(props) {
    return (
      <div class="usuario">
              <img src={props.img} />
              <div class="texto">
                <strong>{props.nome}</strong>
                {props.nomesub}
              </div>
            </div>
    )
  }