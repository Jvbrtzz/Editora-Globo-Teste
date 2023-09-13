import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import { useEffect} from "react"
import axios from "axios"
function Home(){

    useEffect(() =>{        
        axios.get('http://localhost:3333/publicacoes')
        .then(res =>{
            const dados = res.data
            contruindoDados(dados)

        })
        .catch(err => console.log(err))

    }, [])
   async function contruindoDados(itens){
        const element = document.getElementById('itensContainer')
        element.innerHTML = ''
        itens.forEach((itens) => {
            element.innerHTML += `  
            <h1 class=${styles.titulo}>${itens.titulo}</h1>
            <h2 class=${styles.conteudo}>${itens.conteudo}</h2>
            <h3 class=${styles.data}>${itens.data}</h3>              
            `
        });
       
    }
   
    return(
        <>
            <section className={styles.home_container}>  
                <LinkButton to='/form' text ="Ir Para Formulário"/>                
                </section>
                <div className={styles.container}>
                <h1 className={styles.publi}>Notícias</h1>   
                    <div id='itensContainer'>              
                    </div>   
            </div>
        </>
    )

}

export default Home