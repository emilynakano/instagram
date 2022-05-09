import React from 'react';
import Post from './Post';
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
        imgProfile: "assets/img/meowed.svg"
    }
]