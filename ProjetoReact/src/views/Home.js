import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
function Home(){
    return(
        <section className={styles.home_container}>
        <h1 className={styles.h1}>Bem vindo a Página inicial</h1>        
        <LinkButton to='/form' text ="Clickar"/>
        </section>
    )
}

export default Home