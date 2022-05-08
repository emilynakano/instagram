import Sugestoes from "./Sugestoes";
import User from "./User";

export default function Sidebar() {
    return (
      <div class="sidebar">
            <User img="assets/img/catanacomics.svg" nome="catanacomics" nomesub="Catana"/>
            <Sugestoes />
  
            <div class="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
  
            <div class="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
          </div>
    );
  }
