import React, {useState, useEffect } from 'react';
import styles from './styles.module.css'

function ListaDeTenis(){
    const [tenis, setTenis] = useState([]);

     useEffect(() => {
      async function carregarTenis () {
        const resposta = await fetch ('https://api-store-dolw.aprender.com/shoes')
        const imagemTenis = resposta.json();

        setTenis(imagemTenis);
      }
      carregarTenis();

}, [])

return (
   <>
       <ul>
           {tenis.map(tenis => (
            <li>
                <img src={tenis.imagem_url} className='' alt="" />
            </li>
           ))}
       </ul>
   
   </>
)
}