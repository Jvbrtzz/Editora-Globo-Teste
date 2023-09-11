import styles from './Footer.module.css'
import{FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <footer className={styles.foot}>
            <h2>Entre em contato!</h2>
            <ul className={styles.footUl}>
                <li className={styles.footLi}><FaFacebook/></li>
                <li className={styles.footLi}><FaTwitter/></li>
                <li className={styles.footLi}><FaLinkedin/></li>
            </ul>
        </footer>
    )
}

export default Footer