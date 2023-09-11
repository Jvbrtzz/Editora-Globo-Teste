import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar(){
    return(
        <ul className={styles.ulNav}>
            <li className={styles.liNav}>
                <Link to= "/">Home</Link>
            </li>    
            <li className={styles.liNav}>    
                <Link to= "/sobre">Sobre</Link>
            </li>
            <li className={styles.liNav}>
                <Link to="/form">Formulário</Link>
            </li>
        </ul>
    )
}

export default Navbar