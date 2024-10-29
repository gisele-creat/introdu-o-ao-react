import React, {useState, useEffect } from 'react';
import styles from './styles.module.css'

function ListaDeTenis(){
    const [tenis, setTenis] = useState([]);

     useEffect(() => {
      async function carregarTenis() {
        const resposta = await fetch ('https://api-store-do1w.onrender.com/shoes')
        const imagemTenis = await resposta.json();

        setTenis(imagemTenis);
      }
      carregarTenis();

}, []);

return (
   <>
       <ul>
           {tenis.map(tenis => (
            <li key={tenis.id}>
                <img src={tenis.imagem_url} className={styles.img} alt="" />
            </li>
           ))}
       </ul>
   
   </>
);
}

export default ListaDeTenis;