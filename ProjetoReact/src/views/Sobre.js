import { useEffect, useState } from "react"
import styles from "./Sobre.module.css"
import axios from "axios"

function Sobre(){
    const [itens, setItens] = useState([''])

    useEffect(() =>{        
        axios.get('http://localhost:3333/publicacoes')
        .then(res =>{
            const dados = res.data
            setItens(dados)
        })
    }, [])
   


    return(
        <div className={styles.sobre_container}>
        <h1 className={styles.publi}>Notícias</h1>
        {itens.map(itens => <h1 className={styles.titulo}>{itens.titulo}</h1>)}
        {itens.map(itens => <h2 className={styles.conteudo}>{itens.conteudo}</h2>)}
        {itens.map(itens => <h3 className={styles.data}>{itens.data}</h3>)}
        </div>
    )
}

export default Sobre