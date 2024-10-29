import { Link } from 'react-router-dom';
import styles from './Header.module.css'
// import img from  '../Header/img/logo-header.svg'
// import cart from '../Header/img/mini-cart.svg'
import 'bootstrap/dist/css/bootstrap.min.css';



function Header(){
    return (
      <header className={styles.header}>
           
            <div className={styles.hea_1}>
             
              {/* <img src ={img}  className={styles.header_img}  alt='IMG'></img>   */}
              <input type='text' placeholder='Pesquisar produto...'></input>
                <label className={styles.headerbutton}>Cadastra-se.</label>
                <label className={styles.headerbutton2}>Entrar.</label >
                <div className={styles.div_cart}>
                {/* <img  src={cart}  className={styles.cart}  alt='carrinho'></img> */}
                </div>
           
            </div>
            <div className={styles.hea_2}>
            <Link to='/home'>Home</Link>
              <Link to='/home'>Produtos</Link>
              <Link to='/login'>Categorias</Link>
              <Link to='/login'>Meus Pedidos</Link>
            
            </div>
      </header>
    )
}
export default Header